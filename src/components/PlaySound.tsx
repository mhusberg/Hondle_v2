import React, { useEffect, useRef } from 'react';

interface PlaySoundProps {
  fileName: string;
}

const PlaySound: React.FC<PlaySoundProps> = ({ fileName }) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.1;
            audioRef.current.play();
        }
    },[]);

  return (
    <div>
      <audio ref={audioRef}>
        <source src={`${fileName}`} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PlaySound;
