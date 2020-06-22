import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './App.css';
import Router from './Router';

export const JamsContext = React.createContext();

// TODO
// bring in typescript soon
// make an enum for the delay values

const sampleJams = [
  {
    id: 1,
    songname: 'Sample Jam Yep',
    songslug: 'sample-jam-yep',
    minilouge: 198,
    mpcseq: 12,
    bpm: 120,
    brutepatch: 2,
    bruteseq: 3,
    delay: 'delay1',
    chords: 'C D D Eb',
    lyrics: 'testme lyrics',
    notes: 'test notes lorem ipsum yea boi etc',
  },
  {
    id: 2,
    songname: 'Some other Jam blueberry',
    songslug: 'some-other-jam-blueberry',
    minilouge: 194,
    mpcseq: 9,
    bpm: 160,
    brutepatch: 5,
    bruteseq: 5,
    delay: 'delay2',
    chords: 'C D D Eb Eb Amin',
    lyrics: 'testme lyrics oh yeah',
    notes: 'test notes for blue jam',
  },
];

function App() {
  const history = useHistory();
  // could end up using useReducer instead of useState here
  const [jams, setJams] = useState(sampleJams);

  const jamsProvider = {
    handleEditJam,
    handleDeleteJam,
    handleAddJam,
    getJamBySlug,
  };

  function handleAddJam(newJamToAdd) {
    setJams([...jams, newJamToAdd]);
    console.log('new jam to add, newJamToAdd');
  }

  //move this to a service or something
  function getJamBySlug(slug) {
    return [...jams].find(jam => jam.songslug === slug);
  }

  function handleEditJam(id, updatedJam) {
    console.log('call handleEditJam from app with ', updatedJam);
    const newJams = [...jams];
    const jamToUpdateIndex = newJams.findIndex(jam => jam.id === id);
    newJams[jamToUpdateIndex] = updatedJam;
    setJams(newJams);
  }

  function handleDeleteJam(id) {
    const jamsCopyToFilter = [...jams];
    const newJams = jamsCopyToFilter.filter(jam => jam.id !== id);
    setJams(newJams);
    history.push('/');
  }

  return (
    <div className="dad-jams-app">
      <JamsContext.Provider value={jamsProvider}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Jam</Link>
            </li>
          </ul>
        </nav>

        <Router jams={jams} />
      </JamsContext.Provider>
    </div>
  );
}

export default App;
