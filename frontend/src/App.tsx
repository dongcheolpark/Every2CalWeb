import React from 'react';
import logo from './logo.svg';
import everyLogo from './images/Everytime_Logo.png'
import { Button, ChakraProvider,Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <div className='Form'>
            <img src={everyLogo} className="App-logo" alt="logo" />
            <p className='Content'>
              에브리타임 ICS 생성기
            </p>
            <InputGroup className='Content'>
              <InputLeftAddon children='URL'/>
              <Input type='text' placeholder='공유 URL을 붙여넣으세요' />
            </InputGroup>
            <InputGroup className='Content'>
              <InputLeftAddon children='시작 날짜'/>
              <Input type='date' placeholder='공유 URL을 붙여넣으세요' />
            </InputGroup>
            <InputGroup className='Content'>
              <InputLeftAddon children='종료 날짜'/>
              <Input type='date' placeholder='공유 URL을 붙여넣으세요' />
            </InputGroup>
            <Button colorScheme='red'>생성!</Button>
          </div>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
