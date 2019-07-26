import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

//https://rickandmortyapi.com/api/locations/
export default function LocationsList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios
            .get(`https://rickandmortyapi.com/api/location/`)
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
            <LocationCard
            key={id}
            name={data.name}
            type={data.type}
            dimension={data.dimension}
            residents={data.residents.length}
            />
        ))}

        {console.log('Location',data)}
    </section>
    
}
