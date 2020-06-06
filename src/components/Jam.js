import React from "react";

export default function Jam({ jam, handleDeleteJam }) {
  return (
    <div>
      <h1>{jam.songname}</h1>
      <h2>id is {jam.id}</h2>
      <table>
        {/* This really is tabbular data so a table is the appropriate markup here,
          this is not an old school layout hack lol, it's an a11y appropraite decision */}
        <caption>
          Synth patch settings and general info for {jam.songname} jam session
        </caption>
        <tbody>
          <tr>
            <th scope="row">Minilouge</th>
            <td>{jam.minilouge}</td>
          </tr>
          <tr>
            <th scope="row">MPC Seq</th>
            <td>{jam.mpcseq}</td>
          </tr>
          <tr>
            <th scope="row">BPM</th>
            <td>{jam.bpm}</td>
          </tr>
          <tr>
            <th scope="row">Brute Patch</th>
            <td>{jam.brutepatch}</td>
          </tr>
          <tr>
            <th scope="row">Brute Seq</th>
            <td>{jam.bruteseq}</td>
          </tr>
          <tr>
            <th scope="row">Delay</th>
            <td>{jam.delay}</td>
          </tr>
          <tr>
            <th scope="row">Chords</th>
            <td>{jam.chords}</td>
          </tr>
          <tr>
            <th scope="row">Lyrics</th>
            <td>{jam.lyrics}</td>
          </tr>
          <tr>
            <th scope="row">Notes</th>
            <td>{jam.notes}</td>
          </tr>
        </tbody>
      </table>
      <button>Edit</button>
      <button onClick={() => handleDeleteJam(jam.id)}>Delete &times;</button>
      <hr />
    </div>
  );
}
