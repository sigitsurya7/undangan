import React from 'react';

const AudioPlayer = ({ src }) => {
  return (
    <div>
      <audio controls autoPlay hidden>
        <source src={src} type="audio/webm" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
