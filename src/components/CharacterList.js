import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

//https://swapi.co/api/people/`
//https://rickandmortyapi.com/api/character/

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData ] = useState([]);
      // console.log('character',data)
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get(`https://rickandmortyapi.com/api/character//`)
      .then(res => {
        setData(res.data.results);
        console.log('response', res);
      })
      .catch(err => {
        console.log('error', err);
      })
  }, [])

  return <section className='character-list grid-view'>
    
        { data.map((data, index) => (
          <CharacterCard 
          key={index} 
          img={data.image}
          name={data.name}
          species={data.species} status={data.status}
          // origin={[data.origin]}
          
          />
        )) }
      {console.log('character',data)}
    </section>

}
