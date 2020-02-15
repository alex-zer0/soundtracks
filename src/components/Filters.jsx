import React from 'react'
import { Form } from 'react-bootstrap';

const FiltersComponent = ({ data, onSelect }) => {
  if (!data) {
    return null;
  }
  const setValue = (key, { value }) => {
    onSelect(key, value === 'All' ? null : value);
  };
  const [singers, ganres, years] = [[], [], []];
  data.forEach(({ singer, ganre, year }) => {
    if (!singers.includes(singer)) {
      singers.push(singer);
    }
    if (!ganres.includes(ganre)) {
      ganres.push(ganre);
    }
    if (!years.includes(year)) {
      years.push(year);
    }
  });
  return (
    <Form>
      <Form.Group>
        <Form.Label>Singer</Form.Label>
        <Form.Control as="select" onChange={({ target }) => setValue('singer', target)}>
          <option>All</option>
          {singers.map(singer => <option key={singer}>{singer}</option>)}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Ganre</Form.Label>
        <Form.Control as="select" onChange={({ target }) => setValue('ganre', target)}>
          <option>All</option>
          {ganres.map(ganre => <option key={ganre}>{ganre}</option>)}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control as="select" onChange={({ target }) => setValue('year', target)}>
          <option>All</option>
          {years.map(year => <option key={year}>{year}</option>)}
        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default FiltersComponent
