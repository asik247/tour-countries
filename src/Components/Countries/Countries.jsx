import React, { use, useState } from 'react';
import Countrie from '../Countrie/Countrie';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const arrayCountries = countries.countries
    const [count, setCount] = useState(0);
    const handleVisitedCountries = ()=>{
        setCount(count+1)
    }

    return (
        <div >
            <h1 className='text-center font-bold mt-10 text-2xl'>Total Visited Countries:{count}</h1>
            <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto  mt-20'>
                {
                    arrayCountries.map(countrie => <Countrie handleVisitedCountries={handleVisitedCountries} key={countrie.cca3
                    } countrie={countrie}></Countrie>)
                }
            </div>
        </div>
    );
};

export default Countries;