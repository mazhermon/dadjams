import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function NewJam({ handleAddJam }) {
  const history = useHistory();

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

  function createJamOnFormSubmit(e) {
    e.preventDefault();

    const newJam = {
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

    handleAddJam(newJam);
    history.push("/");
  }

  return (
    <div>
      <h1>Add Song</h1>
      <form onSubmit={createJamOnFormSubmit}>
        <div>
          <label htmlFor="songname">Name</label>
          <input type="text" name="songname" ref={songnameRef} id="songname" />
        </div>
        <div>
          <label htmlFor="minilouge">Minilouge</label>
          <input
            type="number"
            ref={minilougeRef}
            name="minilouge"
            id="minilouge"
          />
        </div>
        <div>
          <label htmlFor="mpcseq">MPC Seq</label>
          <input type="number" name="mpcseq" ref={mpcseqRef} id="mpcseq" />
        </div>
        <div>
          <label htmlFor="bpm">BPM</label>
          <input type="number" name="bpm" ref={bpmRef} id="bpm" />
        </div>
        <div>
          <label htmlFor="brutepatch">Brute Patch</label>
          <input
            type="text"
            name="brutepatch"
            ref={brutepatchRef}
            id="brutepatch"
          />
          <p>this will be a file uploader eventually</p>
        </div>
        <div>
          <label htmlFor="bruteseq">Brute Seq</label>
          <input type="text" name="bruteseq" ref={bruteseqRef} id="bruteseq" />
        </div>
        <div>
          <label htmlFor="delay">Delay</label>
          <input type="text" name="delay" ref={delayRef} id="delay" />
          <p>Make this a radio button control</p>
        </div>
        <div>
          <label htmlFor="chords">Chords</label>
          <input type="text" name="chords" ref={chordsRef} id="chords" />
          <p>Maybe make this an image option so hitme can be used?</p>
        </div>
        <div>
          <label htmlFor="lyrics">Lyrics</label>
          <textarea type="text" name="lyrics" ref={lyricsRef} id="lyrics" />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <textarea type="text" name="notes" ref={notesRef} id="notes" />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
