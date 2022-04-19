import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
// import styled from 'styled-components';


export default function App() {
  const [person, setPerson] = useState([]); 
  // const [currentPerson, setCurrentPerson] = useState('1');
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data.results);
      setPerson(res.data.results);
    })
    .catch(err => {
      console.error(err)
    });
  }, []);

// console.log('person:', person)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        person.map((persons, index) => {
          return (<Character
            key={index}
            character={persons}
            />
          )
        })
      }
      
    </div>
  );
}
