import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {

    const [title, setTitle] = useState("");
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
    return (
        <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Book Title</label>
            <input className="input" onChange={ handleChange } value={ title } type="text" name="title" placeholder="Book Title" required />
            <button className="button" type="submit">Create Book</button>
        </form>
        </div>
    );
}

export default BookCreate;