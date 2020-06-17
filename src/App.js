import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Link, Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NewJam from './pages/NewJam';
import EditJam from './pages/EditJam';

export const JamsContext = React.createContext();

//bring in typescript soon

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
    delay: 'test 3',
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
    bpm: 120,
    brutepatch: 5,
    bruteseq: 5,
    delay: 'test 2',
    chords: 'C D D Eb Eb Amin',
    lyrics: 'testme lyrics oh yeah',
    notes: 'test notes lorem ipsum yea boi etc',
  },
];

function App() {
  // could end up using useReducer instead of useState here
  const history = useHistory();

  const [jams, setJams] = useState(sampleJams);
  const [selectedJamId, setSelectedJamId] = useState(null);

  const jamsProvider = {
    handleSelectedJam,
    handleEditJam,
    handleDeleteJam,
    getJamBySlug,
  };

  function handleAddJam(newJamToAdd) {
    setJams([...jams, newJamToAdd]);
  }

  function handleSelectedJam(id) {
    // not using this, just use a link
    setSelectedJamId(id);
  }

  //move this to a service or something
  function getJamBySlug(slug) {
    return [...jams].find(jam => jam.songslug === slug);
  }

  // const selectedJam = jams.find(jam => jam.id === selectedJamId);

  function handleEditJam(id, updatedJam) {
    console.log('call handleEditJam from app with ', updatedJam);
    const newJams = [...jams];
    const jamToUpdateIndex = newJams.findIndex(jam => jam.id === id);
    newJams[jamToUpdateIndex] = updatedJam;
    setJams(newJams);
    // history.push('/');
  }

  function handleDeleteJam(id) {
    const jamsCopyToFilter = [...jams];
    const newJams = jamsCopyToFilter.filter(jam => jam.id !== id);
    setJams(newJams);
  }

  return (
    <div className="dad-jams-app">
      <JamsContext.Provider value={jamsProvider}>
        <p>Just chuck it all here for now and use router later</p>

        <Link to="/">Home</Link>
        <Link to="/new">New Jam</Link>

        <hr />

        <Switch>
          <Route
            path="/new"
            render={props => <NewJam handleAddJam={handleAddJam} />}
          ></Route>
          <Route
            path="/jams/edit/:songslug"
            render={props => (
              <EditJam {...props} handleEditJam={handleEditJam} />
            )}
          ></Route>
          <Route
            exact
            path="/"
            render={props => <Home {...props} jams={jams} />}
          ></Route>
        </Switch>
      </JamsContext.Provider>
    </div>
  );
}

export default App;
