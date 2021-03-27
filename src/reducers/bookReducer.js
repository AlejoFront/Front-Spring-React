import { types } from '../types/types';
const initialState = []
export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getBooks:
            return {
                ...state,
                books:[...action.payload],
            }
        case types.addBook:
            return {
                ...state,
                books:[...state.books, action.payload]
            }
        case types.delBook:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }
        case types.updateBook:
            return {
                ...state,
                books: state.books.map(
                    book => book.id === action.payload.id ? action.payload.book : book
                )
            }
        case types.bookLogout:
            return {}
        default:
            return state;
    }
}