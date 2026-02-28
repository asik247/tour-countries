import React, { use } from 'react';
import Countrie from '../Countrie/Countrie';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const arrayCountries = countries.countries
    return (
        <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto  mt-20'>
            {
                arrayCountries.map(countrie => <Countrie key={countrie.cca3
                } countrie={countrie}></Countrie>)
            }
        </div>
    );
};

export default Countries;