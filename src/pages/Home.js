import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ jams }) {
  // function handleCreateSong() {
  //   console.log('create a song, route to new and display form');
  // }

  const jamListItemLinks = jams.map(jam => (
    <li key={jam.id}>
      <Link to={`/jams/${jam.songslug}`}>{jam.songname}</Link>
    </li>
  ));

  return (
    <div>
      <h1>DadJams yo</h1>
      <p>
        A custom song &amp; patch settings reference for Tim &amp; Maz's synth
        playground
      </p>

      <Link to="/new">Add Song</Link>

      <h2>List Jams in full for now</h2>
      <p>also put these in the menu</p>
      <p>Then just list the song titles and link to jam page with router</p>

      {/* <Jam jam={jam} key={jam.id} /> */}
      <nav>
        <ul>{jamListItemLinks}</ul>
      </nav>
    </div>
  );
}
