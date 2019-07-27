import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';

//api if there are too many calls: https://rick-and-morty-learning-api.herokuapp.com/api/

export default function LocationsList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios
            .get(`https://rickandmortyapi.com/api/episode/`)
            .then(res =>{
                setData(res.data.results)
                console.log('response',res)
            })
            .catch(err => {
                console.log('error', err);
              })
    },[])

    return <section className='character-list grid-view'>
        {/* <LocationCard/> */}
        {data.map((data, id) => (
            <EpisodeCard
            key={id}
            name={data.name}
            episode={data.episode}
            characters={data.characters.length}
            date={data.air_date}
            />
        ))}
    </section>
    
}