import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import JamForm from '../components/JamForm';
import { JamsContext } from '../App';

export default function EditJam({ handleEditJam, match }) {
  const history = useHistory();
  const { getJamBySlug } = useContext(JamsContext);

  const currentJam = getJamBySlug(match.params.songslug);
  console.count('how many times does this component render?');

  // useEffect(currentJam => {
  //   console.log('router match is ', currentJam && match);
  //   console.count('hi');
  //   currentJam = currentJam && getJamBySlug(match.params.songslug);
  //   console.log('current jam is ', currentJam && currentJam);
  // });

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

    const updatedJam = {
      id: uuidv4(),
      songname: songnameRef.current.value,
      minilouge: parseInt(minilougeRef.current.value),
      mpcseq: parseInt(mpcseqRef.current.value),
      bpm: parseInt(bpmRef.current.value),
      brutepatch: brutepatchRef.current.value,
      bruteseq: parseInt(bruteseqRef.current.value),
      delay: delayRef.current.value,
      chords: chordsRef.current.value,
      lyrics: lyricsRef.current.value,
      notes: notesRef.current.value,
    };

    handleEditJam(updatedJam);
    history.push('/');
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
      <JamForm {...formProps} jam={currentJam && currentJam} />
    </div>
  );
}
