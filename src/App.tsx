import { Box, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { FizzBuzz } from './lib/fizzbuzz/fizzbuzz';

function App() {
  let i = 0;

  const [num, setNum] = useState("");
  const [isStop,setStop] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const fizzbuzz = new FizzBuzz();

  const Counter = () => {
    if(!isStop) {
      setStop(true);
      
      const countInterval = 100;
  
      intervalRef.current = setInterval(() => {
        setNum(fizzbuzz.convert(i));
        i++;
      },countInterval);

    } else {
      clearInterval(intervalRef.current!);
      setStop(false);
    }
  }

  return (
    <Box 
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <h1>ルーレット</h1>
      {isStop ? (
        <h2>ルーレット中...</h2>
      ) : (
        <h2>スタートを押してね</h2>
      )}
      <Box display='flex' bg='green.200' w='700px' h="700px" p={4} color='white' fontSize='300px' justifyContent="center" alignItems="center">
        <p>{ num }</p>
      </Box>
      <Button onClick={() => Counter()} disabled={isStop}>START/STOP</Button>
    </Box>
  )
}

export default App
