import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook, addNewBook, bookDel, bookLoadin, deleteBook, loadingBooks, updatedBook, bookrefresh } from '../../actions/books'
import Header from '../layouts/Header'

const Books = () => {
    const dispatch = useDispatch();
    const {books} = useSelector(state => state.books)

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [isbn, setIsbn] = useState('')

    const [upName, setUpName] = useState('')
    const [updateId, setUpdateId] = useState()
    const [upAuthor, setUpAuthor] = useState('')
    const [upIsbn, setUpIsbn] = useState('')


    useEffect(() => {
        loadingBooks().then(query => {
            
            query.forEach(data => {
                dispatch(bookLoadin(data))
            })
        })
    }, [dispatch])

    const handleAddBook = (e) => {
        e.preventDefault();
        const data = {name: name, author: author, isbn: isbn}
        addBook(data)
        .then(response => {
            console.log('Se agrego correctamente')
            setName('')
            setAuthor('')
            setIsbn('')
            
            response.json().then(query => {
               const {id, name, author, isbn} = query
               dispatch(addNewBook(id, name, author, isbn));
            })
            
          })
    }

    const handleUpdate = (id, name, author, isbn) => {
        setUpdateId(id)
        setUpName(name)
        setUpAuthor(author)
        setUpIsbn(isbn)
      }

    const updateBook = async (e) => {
        e.preventDefault();
        
        await updatedBook(upName,upAuthor,upIsbn, updateId)
        .then(success => {
            console.log("se actualizo correctamente")
            //refreshBook(updateId, {name: upName,author: upAuthor,isbn: upIsbn})
            dispatch(bookrefresh(updateId, {name: upName,author: upAuthor,isbn: upIsbn}));
        })
            
    }

    const handleDeleteBook = (id) => {
        deleteBook(id)
        .then(response => {
            console.log('Se elimino Correctamente...')
            dispatch(bookDel(id));
        })
        .catch(e => {
            console.error('Error al eliminar')
        })
        
    }

    return (
        <>
            <Header />
            <h2>List Books</h2>
                <table border="1">
                <thead>
                    <tr>
                    <th>nombre</th>
                    <th>author</th>
                    <th>isbn</th>
                    <th colSpan="2">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books?.map((book) => (
                            <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>
                              <button 
                                type="button"
                                onClick={() => handleUpdate(book.id, book.name, book.author, book.isbn)}
                              >Actualizar</button></td>
                            <td>
                              <button 
                                type="button"
                                onClick={() => handleDeleteBook(book.id)}
                              >eliminar</button></td>
                          </tr>
                        ))
                        
                    }
                    
                </tbody>
                </table>
                <br /><br />

                <div style={{display: 'flex',justifyContent: 'space-around'}}>
                    <div>
                        <h2>Add</h2>
                        <form onSubmit={handleAddBook}>
                            <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <br /><br />
                            <input placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                            <br /><br />
                            <input placeholder="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
                            <br /><br />
                            <button type="submit">Guardar</button>
                        </form>
                    </div>
                    <div>
                        <h2>Update</h2>
                        <form onSubmit={updateBook}>
                            <input placeholder="name" value={upName} onChange={(e) => setUpName(e.target.value)} />
                            <br /><br />
                            <input placeholder="author" value={upAuthor} onChange={(e) => setUpAuthor(e.target.value)}/>
                            <br /><br />
                            <input placeholder="isbn" value={upIsbn} onChange={(e) => setUpIsbn(e.target.value)}/>
                            <br /><br />
                            <button type="submit">Actualizar</button>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default Books
