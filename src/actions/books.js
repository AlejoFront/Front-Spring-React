import { types } from "../types/types";

const baseUrl = 'http://artificialbyte.com:8080'
export const loadingBooks = async () => {
    const token = localStorage.getItem('token') || '';
    const data = []
    const getBooks = await fetch(baseUrl+'/v1/book',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    data.push(await getBooks.json())
    
    return data
}

export const bookLoadin = (book) => ({
    type: types.getBooks,
    payload: book
})


export const addBook = async (book) => {
    const token = localStorage.getItem('token') || '';
    const response = await fetch(baseUrl+'/v1/book',{
        method: 'POST',
        body: JSON.stringify(book),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
      })

    

    return response
}

export const updatedBook = async (name,author,isbn,Id) => {
    const token = localStorage.getItem('token') || '';
    const data = {name:name,author:author,isbn:isbn}
    const response = await fetch(baseUrl+'/v1/book/'+Id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
      })
    return response
}

export const deleteBook = async (id) => {
    const token = localStorage.getItem('token') || '';
    const response = await fetch(baseUrl+'/v1/book/'+id,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })

    return response
}

export const addNewBook = (id, name, author, isbn) => ({
    type: types.addBook,
    payload: {
        id, name, author, isbn
    }
})

export const bookDel = (id) => ({
    type: types.delBook,
    payload: id
})




export const bookrefresh = (id, book) => ({
    type: types.updateBook,
    payload: {
        id,
        book: {
            id,
            ...book
        }
    }
})