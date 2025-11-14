import { useEffect, useState } from 'react';
import { type Timer } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: Timer) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000)


  useEffect(() => {
    setInterval(function() {
      setRemainingTime(prevTime => prevTime - 50)
    }, 50)
  }, []
  )

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  
  return (
    
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress value={remainingTime} max={duration * 1000}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
