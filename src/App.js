import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { AppMain, AppContent, AppFooter } from './App.styles';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import soundtracks from './data/soundtracks';

const PER_PAGE = 10;

function App() {
  const [page, setPage] = useState(1);
  const [ganre, setGanre] = useState(null);
  const [singer, setSinger] = useState(null);
  const [year, setYear] = useState(null);
  const onChangeFilter = (key, value) => {
    setPage(1);
    if (key === 'ganre') {
      setGanre(value);
    }
    if (key === 'singer') {
      setSinger(value);
    }
    if (key === 'year') {
      setYear(value);
    }
  };
  console.log(ganre, singer, year, page);
  const filteredList = soundtracks.filter(item =>
    (!ganre || ganre === item.ganre) &&
    (!singer || singer === item.singer) &&
    (!year || Number(year) === item.year));
  const pageList = filteredList.slice((page - 1) * 10, page * PER_PAGE);

  return (
    <AppMain>
      <AppContent>
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
            {pageList.map(({ id, singer, song, ganre, year }) => (
              <tr key={id}>
                <td>{singer}</td>
                <td>{song}</td>
                <td>{ganre}</td>
                <td>{year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Filters data={soundtracks} onSelect={onChangeFilter} />
      </AppContent>
      <AppFooter>
        <Pagination
          active={page}
          list={filteredList}
          perPage={PER_PAGE}
          onChange={value => setPage(value)}
        />
      </AppFooter>
    </AppMain>
  );
}

export default App;
