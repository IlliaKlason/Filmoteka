import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from './SearchBar.styled';

const SearchBar = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');
  const onSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Enter the title of the movie');
      return;
    }
    onHandleSubmit(query.trim());
    setQuery('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Button>
        <span>Search</span>
      </Button>
      <Input
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search for a movie..."
        onChange={({ target }) => setQuery(target.value)}
      />
    </Form>
  );
};
SearchBar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
