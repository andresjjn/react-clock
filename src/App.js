import './App.css';
import Clock from './components/Clock/Clock';
import getTime from './utils/getTime';
import { useEffect, useState } from 'react';

function App() {

  const [showTime, setShowTime] = useState('Starting...')

  useEffect(() => {
    const interval = setInterval(() => 
      setShowTime(getTime())
    , 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <Clock time={showTime}/>
      </header>
    </div>
  );
}

export default App; 
