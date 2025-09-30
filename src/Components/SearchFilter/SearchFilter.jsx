import React from 'react'
import "./SearchFilter.css"

const SearchFilter = () => {
  return (
    <div className='search-filter'>
      <input className='search-input' type="text" placeholder="Search products..."  />
        <select className='category-select'>
            <option className='category-option' value="">All Categories</option>
            <option className='category-option' value="Fashion">Fashion</option>
            <option className='category-option' value="Home">Home</option>
            <option className='category-option' value="Grocery">Grocery</option>
            <option className='category-option' value="Sports">Sports</option>
            <option className='category-option' value="Books">Books</option>
        </select>
    </div>
  )
}

export default SearchFilter
