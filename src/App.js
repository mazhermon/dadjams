import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NewJam from "./pages/NewJam";

//bring in typescript soon

const sampleJams = [
  {
    id: 1,
    songname: "Sample Jam Yep",
    minilouge: 198,
    mpcseq: 12,
    bpm: 120,
    brutepatch: 2,
    bruteseq: 3,
    delay: "test 3",
    chords: "C D D Eb",
    lyrics: "testme lyrics",
    notes: "test notes lorem ipsum yea boi etc",
  },
  {
    id: 2,
    songname: "Some other Jam blueberry",
    minilouge: 194,
    mpcseq: 9,
    bpm: 120,
    brutepatch: 5,
    bruteseq: 5,
    delay: "test 2",
    chords: "C D D Eb Eb Amin",
    lyrics: "testme lyrics oh yeah",
    notes: "test notes lorem ipsum yea boi etc",
  },
];

function App() {
  const [jams, setJams] = useState(sampleJams);

  // on add jam func would be here and call setJams
  // chuck these in a context if any drilling is required
  function handleAddJam(newJamToAdd) {
    setJams([...jams, newJamToAdd]);
  }

  function handleDeleteJam(id) {
    const jamsCopyToFilter = [...jams];
    const newJams = jamsCopyToFilter.filter(jam => jam.id !== id);
    setJams(newJams);
  }

  return (
    <div className="dad-jams-app">
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
          path="/"
          render={props => (
            <Home {...props} jams={jams} handleDeleteJam={handleDeleteJam} />
          )}
        ></Route>
      </Switch>
      {/* <Home jams={jams} handleDeleteJam={handleDeleteJam} /> */}

      <hr />

      <p>Use context to pass this if it goes deeper</p>
      {/* <NewSong handleAddJam={handleAddJam} /> */}
    </div>
  );
}

export default App;
