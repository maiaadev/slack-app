import React, { useContext } from 'react';
import UseContext from '../../context/UseContext';

function SearchBar() {
  const { setSearch } = useContext(UseContext);
  return (
    <input
      className='search'
      type='text'
      placeholder='Search'
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
}

export default SearchBar;
