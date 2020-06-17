import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import JamForm from '../components/JamForm';
import { JamsContext } from '../App';

export default function EditJam({ handleEditJam, match }) {
  const history = useHistory();
  const { getJamBySlug } = useContext(JamsContext);

  const songslug = match.params.songslug;
  const currentJam = getJamBySlug(songslug) || {};
  console.count('how many times does this component render?');

  const songnameRef = useRef(null);
  const minilougeRef = useRef(null);
  const mpcseqRef = useRef(null);
  const bpmRef = useRef(null);
  const brutepatchRef = useRef(null);
  const bruteseqRef = useRef(null);
  const delayRef = useRef(null);
  const chordsRef = useRef(null);
  const lyricsRef = useRef(null);
  const notesRef = useRef(null);

  function updateJamOnFormSubmit(e) {
    e.preventDefault();
    history.push(`/jams/${songslug}`);
  }

  const formProps = {
    handleSubmit: updateJamOnFormSubmit,
    songnameRef,
    minilougeRef,
    mpcseqRef,
    bpmRef,
    brutepatchRef,
    bruteseqRef,
    delayRef,
    chordsRef,
    lyricsRef,
    notesRef,
  };

  return (
    <div>
      <h1>Edit Jam</h1>
      <JamForm {...formProps} jam={currentJam} />
    </div>
  );
}
