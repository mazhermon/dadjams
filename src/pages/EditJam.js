import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import JamForm from '../components/JamForm';
import { JamsContext } from '../App';

export default function EditJam({ handleEditJam, match }) {
  const history = useHistory();
  const { getJamBySlug } = useContext(JamsContext);

  const songslug = match.params.songslug;
  const currentJam = getJamBySlug(songslug) || {};
  console.count('how many times does this component render?');

  const [delay, setDelay] = useState(currentJam.delay || null);

  function updateJamOnFormSubmit(e) {
    e.preventDefault();
    history.push(`/jams/${songslug}`);
  }

  const formProps = {
    handleSubmit: updateJamOnFormSubmit,
    delay,
    setDelay,
  };

  return (
    <div>
      <h1>Edit Jam</h1>
      <JamForm {...formProps} jam={currentJam} />
    </div>
  );
}
