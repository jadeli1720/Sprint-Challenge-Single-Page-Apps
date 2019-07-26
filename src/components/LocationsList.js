import React, { useEffect, useState } from 'react';
import Axios from 'axios';

//https://rickandmortyapi.com/api/locations/
export default function LocationsList() {
    const [data, setData] = useState();

    useEffect(() => {
        Axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(res =>{
                setData(res.data.results)
                console.log('respons',res)
            })
            .catch(err => {
                console.log('error', err);
              })
    },[])

    return <section>

        {console.log('Location',data)}
    </section>
    
}
