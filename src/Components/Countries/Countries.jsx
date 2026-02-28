import React, { use, useState } from 'react';
import Countrie from '../Countrie/Countrie';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    // promise use usign and data;
    const arrayCountries = countries.countries
    // data in contries;
    const [visited, setVisited] = useState([]);
    // add flag code start here
    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedCountries = (countrie) => {
        const newVisitedCountry = [...visited, countrie];
        setVisited(newVisitedCountry)

    }
    // add flag handler code hre;
    const handleFlag = (flag) => {
        // console.log('flag clicked', flag);
        const newFlags = [...visitedFlag, flag]
        setVisitedFlag(newFlags)


    }

    return (
        <div >
            {/* visited ar totla show */}
            <h1 className='text-center font-bold mt-10 text-2xl'>Total Visited Countries:{visited.length}</h1>
            <div className='ml-20  mt-5 font-bold text-xl'>
                <h1>All Vissited Country Name:-</h1>
                {/* all visited map and single visti */}
                <ol>
                    {
                        visited.map((cou, index) => <li key={index}>{cou.name.common}</li>)
                    }
                </ol>
            </div>
            {/* all flage length show */}
            <h1 className='font-bold text-2xl ml-20 mt-5 mb-2'>Total Flag:{visitedFlag.length}</h1>
            {/* all flage map and single flg */}
            <div className='grid md:grid-cols-5 gap-5 w-11/12 mx-auto border-b-4 pb-5'>
                {
                    visitedFlag.map((flg, index) => <img className='w-full' key={index} src={flg}></img>)
                }
            </div>
            {/* all data retunr countre code  */}
            <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto  mt-20'>
                {
                    arrayCountries.map(countrie => <Countrie handleVisitedCountries={handleVisitedCountries} key={countrie.cca3.cca3
                    } countrie={countrie} handleFlag={handleFlag} ></Countrie>)
                }
            </div>
        </div>
    );
};

export default Countries;