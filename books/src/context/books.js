import axios from 'axios';
import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

      const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
      }

      const createBook = async (title) => {

        // Only state update the books array
        /* const updatedBooks = [...books, {
          id: Math.round(Math.random() * 99999),
          title
        }];
        setBooks(updatedBooks); */

        // Use axios to post the new book to the server
        const response = await axios.post("http://localhost:3001/books", {
          title
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
      }

      const editBookById = async (id, newTitle) => {
        // Only state update the books array
        /* const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, title: newTitle };
          }
          return book;
        });
        setBooks(updatedBooks); */

        // Use axios to patch the book on the server
        // setBooks(updatedBooks);
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title: newTitle
        });
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, ...response.data };
          }
          return book;
        });
        setBooks(updatedBooks);
      }

      const deleteBookById = async (id) => {
        // Only state update the books array
        /* const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });
        setBooks(updatedBooks); */

        // Use axios to delete the book on the server
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });
        setBooks(updatedBooks);
      }

    return (
        <BooksContext.Provider value={{ books, createBook, deleteBookById, editBookById, fetchBooks }}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;