import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = React.useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className='search-bar'>
      <h3>Search for images</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Enter a search term to get started</label>
        <input onChange={handleChange} value={term} type="text" />
      </form>
    </div>
  )
}

export default SearchBar