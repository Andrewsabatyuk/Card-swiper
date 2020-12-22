import React from 'react';
import {useSpring, animated} from 'react-spring';
import Component1 from './components/Component1'
import './App.css';

function App() {
  const props = useSpring({
    opacity:1,
    from:{opacity:0},
  })
  return (
    <div className='App'>
    <animated.h1 style={props}>Hello</animated.h1>
    <Component1 />
    </div>
  );
}

export default App;
