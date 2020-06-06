import React from "react";
import Jam from "../components/Jam";
import { Link } from "react-router-dom";

export default function Home({ jams, handleDeleteJam }) {
  function handleCreateSong() {
    console.log("create a song, route to new and display form");
  }
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

      {jams.map((jam) => (
        <Jam jam={jam} key={jam.id} handleDeleteJam={handleDeleteJam} />
      ))}
    </div>
  );
}
