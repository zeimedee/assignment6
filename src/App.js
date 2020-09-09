import React,{useState,useEffect} from 'react';
import './App.css'
import axios from 'axios'
import {Container, Row, Col} from 'react-grid-system'

function App() {
  const [data, setData] = useState([]);


  const getData=()=>{
    axios.get('https://corona.lmao.ninja/v2/countries/gh')
         .then((data)=>{
            setData(data.data)
         })
  }

  useEffect(() => {
    getData()
    
  }, [data])

  
  return (
    <div>
      
      <Container>
        <Row>
          <Col className='case center'> Cases <br/>{data.cases}</Col>
          <Col className='death center'> Deaths <br/>{data.deaths}</Col>
          <Col className='active center'>Active <br/>{data.active}</Col>
          <Col className='recovered center'>Recovered <br/>{data.recovered}</Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
