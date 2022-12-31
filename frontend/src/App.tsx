import React from 'react';
import logo from './logo.svg';
import everyLogo from './images/Everytime_Logo.png'
import { ChakraProvider,Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <img src={everyLogo} className="App-logo" alt="logo" />
          <p className='Content'>
            에브리타임 테스트
          </p>
          <InputGroup className='Content'>
            <InputLeftAddon children='id'/>
            <Input type='text' placeholder='공유 URL을 붙여넣으세요' />
          </InputGroup>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
