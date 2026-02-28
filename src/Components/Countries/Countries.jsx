import React, { use } from 'react';
import Countrie from '../Countrie/Countrie';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const arrayCountries = countries.countries
    return (
        <div>
            {
                arrayCountries.map(countrie => <Countrie key={countrie.cca3
                } countrie={countrie}></Countrie>)
            }
        </div>
    );
};

export default Countries;