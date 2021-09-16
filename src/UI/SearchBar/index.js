import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { InputGroup, Button } from '../'
import Container from './styles'

const SearchBar = ({ placeholder, handleSearch, className }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof handleSubmit === 'function') {
      handleSubmit()
    }
  }
  return (
    <Container className={`searchBar--container ${className ? className : ''}`}>
      <form onSubmit={handleSubmit}>
        <BiSearch />
        <InputGroup type="search" placeholder={placeholder} />
        <Button type="submit">Search</Button>
      </form>
    </Container>
  )
}

export default SearchBar
