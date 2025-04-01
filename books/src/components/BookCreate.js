import { useState } from "react";

function BookCreate({ onCreate }) {

    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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