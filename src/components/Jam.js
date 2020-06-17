import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JamsContext } from '../App';

export default function Jam({ match }) {
  const { handleDeleteJam, getJamBySlug } = useContext(JamsContext);

  // set the jam from the url
  const jamSlug = match.params.songslug;
  let jam = getJamBySlug(jamSlug) || {};

  // useEffect(() => {
  //   jam = getJamBySlug(jamSlug) || {};
  // }, [jam]);

  return (
    <div>
      <h1>{jam.songname}</h1>
      <h2>id is {jam.id}</h2>
      <table>
        {/* This really is tabbular data so a table is the appropriate markup here,
          this is not an old school layout hack lol, it's an a11y appropraite decision :D */}
        <caption>
          Synth patch settings and general info for {jam.songname} jam session
        </caption>
        <tbody>
          {/* could make an array of objects and loop through them instead */}
          {jam.minilouge && (
            <tr>
              <th scope="row">Minilouge</th>
              <td>{jam.minilouge}</td>
            </tr>
          )}
          {jam.mpcseq && (
            <tr>
              <th scope="row">MPC Seq</th>
              <td>{jam.mpcseq}</td>
            </tr>
          )}
          {jam.bpm && (
            <tr>
              <th scope="row">BPM</th>
              <td>{jam.bpm}</td>
            </tr>
          )}
          {jam.brutepatch && (
            <tr>
              <th scope="row">Brute Patch</th>
              <td>{jam.brutepatch}</td>
            </tr>
          )}
          {jam.bruteseq && (
            <tr>
              <th scope="row">Brute Seq</th>
              <td>{jam.bruteseq}</td>
            </tr>
          )}
          {jam.delay && (
            <tr>
              <th scope="row">Delay</th>
              <td>{jam.delay}</td>
            </tr>
          )}
          {jam.thchordsng && (
            <tr>
              <th scope="row">Chords</th>
              <td>{jam.chords}</td>
            </tr>
          )}
          {jam.lyrics && (
            <tr>
              <th scope="row">Lyrics</th>
              <td>{jam.lyrics}</td>
            </tr>
          )}
          {jam.notes && (
            <tr>
              <th scope="row">Notes</th>
              <td>{jam.notes}</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <button onClick={() => handleSelectedJam(jam.id)}>Edit</button> */}
      <Link to={`/jams/edit/${jam.songslug}`}>Edit</Link>
      <button onClick={() => handleDeleteJam(jam.id)}>Delete &times;</button>
      <hr />
    </div>
  );
}
