import React from 'react'
import { Table } from 'react-bootstrap';

const SoundtracksTableComponent = ({ tracks }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Singer</th>
        <th>Song</th>
        <th>Ganre</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {tracks.map(({ id, singer, song, ganre, year }) => (
        <tr key={id}>
        <td>{singer}</td>
        <td>{song}</td>
        <td>{ganre}</td>
        <td>{year}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default SoundtracksTableComponent
