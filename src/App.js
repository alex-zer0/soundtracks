import React, { useState } from 'react';
import { AppMain, AppContent, AppFooter } from './App.styles';
import soundtracks from './data/soundtracks';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import SoundtracksTable from './components/SoundtracksTable';

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
  const filteredTracks = soundtracks.filter(item =>
    (!ganre || ganre === item.ganre) &&
    (!singer || singer === item.singer) &&
    (!year || Number(year) === item.year));
  const tracks = filteredTracks.slice((page - 1) * 10, page * PER_PAGE);

  return (
    <AppMain>
      <AppContent>
        <SoundtracksTable tracks={tracks} />
        <Filters data={soundtracks} onSelect={onChangeFilter} />
      </AppContent>
      <AppFooter>
        <Pagination
          active={page}
          list={filteredTracks}
          perPage={PER_PAGE}
          onChange={value => setPage(value)}
        />
      </AppFooter>
    </AppMain>
  );
}

export default App;
