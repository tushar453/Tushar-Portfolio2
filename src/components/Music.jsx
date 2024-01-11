import React, { useState } from 'react';
import mahi from './assests/heart.mp3'
import "./Hero.css";
function SoundButton() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const audio = document.getElementById('myAudio');
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    const dots = document.getElementById('soundButton').childNodes;
    dots.forEach(dot => {
      if (dot.nodeType === 1) {
        dot.style.height = isPlaying ? '20px' : '10px';
      }
    });
  };

  return (
    <>

{isPlaying ? (<p>Pause Music</p>) :(<p>Play Music</p>)}
      <button id="soundButton" onClick={toggleSound}>
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </button>
      <audio id="myAudio" src={mahi} onPlay={handlePlay} onPause={handlePlay} />
    </>
  );
}

export default SoundButton;
