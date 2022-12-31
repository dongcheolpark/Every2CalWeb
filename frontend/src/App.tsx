import React from 'react';
import logo from './logo.svg';
import everyLogo from './images/Everytime_Logo.png'
import { Button, ChakraProvider,IconButton,Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import {VscGithubInverted} from 'react-icons/vsc'
import './App.css';

const onClickGithubBtn = () => {
  window.location.href="https://github.com/dongcheolpark/Every2CalWeb"
}

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <div className='Form'>
            <img src={everyLogo} className="App-logo" alt="logo" />
            <h2>
              에브리타임 ICS 생성기
            </h2>
            <a href='https://github.com/dongcheolpark/Every2CalWeb/blob/master/README.md'>사용방법</a>
            <InputGroup className='Content'>
              <InputLeftAddon children='URL'/>
              <Input type='text' placeholder='공유 URL을 붙여넣으세요' />
            </InputGroup>
            <InputGroup className='Content'>
              <InputLeftAddon children='시작 날짜'/>
              <Input type='date'/>
            </InputGroup>
            <InputGroup className='Content'>
              <InputLeftAddon children='종료 날짜'/>
              <Input type='date'/>
            </InputGroup>
            <Button colorScheme='red'>생성!</Button>
          </div>
          <div className='copyright'>
            <p>2022 dongcheolpark all right reserved</p>
          </div>
          <div
            className='github'
            >
            <IconButton 
            	onClick={onClickGithubBtn}
              colorScheme='blackAlpha'
              fontSize='30px'
              icon={<VscGithubInverted />}
              aria-label=''
            />
          </div>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
