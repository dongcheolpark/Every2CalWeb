import React, { useEffect, useState } from 'react';
import everyLogo from '../../images/Everytime_Logo.png'
import { Button, ChakraProvider,IconButton,Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import {VscGithubInverted} from 'react-icons/vsc'
import './App.css';
import moment from 'moment';
import { getICS } from '../../network/getICS';

const onClickGithubBtn = () => {
  window.location.href="https://github.com/dongcheolpark/Every2CalWeb"
}

const App = () => {
  const [url,setUrl] = useState('');
  const [startDate,setStartDate] = useState(moment().startOf('day'));
  const [endDate,setEndDate] = useState(moment().add(15,'week').startOf('day'));

  const submit = async () => {
    const validate = () => {
      if(url === '') {
        alert('url을 입력해주세요!')
        return;
      }
      if(startDate > endDate) {
        alert('시작 날짜가 종료 날짜보다 빠릅니다.')
        return;
      }
      if(url.match(/(https:\/\/everytime.kr\/\@)/g) == null) {
        alert('잘못된 URL입니다. 다시 입력해주세요!');
        return;
      }
    }

    const downloadTxtFile = (res: string) => {
      const element = document.createElement("a");
      const file = new Blob([res], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "나의 캘린더.ics";
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }

    validate();
    
    const res = await getICS({
      id: url.slice(url.indexOf('@')+1),
      begin: startDate.format('YYYY.MM.DD'),
      end: endDate.format('YYYY.MM.DD')
    }); 

    downloadTxtFile(res.join('\n'));
  }

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
              <Input type='text' placeholder='공유 URL을 붙여넣으세요' value={url} onChange={(e)=>setUrl(e.target.value)}/>
            </InputGroup>
            <InputGroup className='Content'>
              <InputLeftAddon children='시작 날짜'/>
              <Input type='date' value={startDate.format('YYYY-MM-DD')} onChange={(e)=>setStartDate(moment(e.target.value))}/>
            </InputGroup>
            <InputGroup className='Content'>
              <InputLeftAddon children='종료 날짜'/>
              <Input type='date' value={endDate.format('YYYY-MM-DD')} onChange={(e)=>setEndDate(moment(e.target.value))}/>
            </InputGroup>
            <Button colorScheme='red' onClick={submit}>생성!</Button>
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
