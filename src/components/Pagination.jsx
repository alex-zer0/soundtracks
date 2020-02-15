import React from 'react'
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ active, list, perPage, onChange }) => {
  if (!list || list.length < perPage) {
    return null;
  }
  const pages = [];
  for (let i = 0; i < Math.ceil(list.length / perPage); i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination>
      {pages.map(page => (
        <Pagination.Item key={page} active={page === active} onClick={() => onChange(page)}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
}

export default PaginationComponent
