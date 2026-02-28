import React, { useState } from 'react';

const Countrie = ({ countrie, handleVisitedCountries, handleFlag, added }) => {
    //  single countrie fetch countries props;

    // useStae for btn visited;
    const [visited, setVisited] = useState(false)
    const handleClicked = () => {
        setVisited(!visited)
        handleVisitedCountries(countrie)
      
    }

    return (
        // single countrie usign card code start here;
        <div>
            <h1 className='font-bold'>official Name: {countrie.name.official}</h1>
            {/* visited ture hole dynamiclly style add  */}
            <div className={` p-5 ${visited && 'bg-red-600 rounded-2xl text-white'}`}>

                <img className='w-full' src={countrie.flags.flags.png} alt="" />
                <h1>Name: {countrie.name.common}</h1>
                <p>Population: {countrie.population.population}</p>
                <p>{countrie.population.population > 300000 ? "Big Countrie" : "Small Countrie"}</p>
                {/* btn visited and toggling */}
                <button onClick={handleClicked} className='btn'>{visited ? 'Visited' : 'NotVisite'} </button>
                
                <button onClick={() => { handleFlag(countrie.flags.flags.png) }} className='btn'>Add Flag</button>

            </div>
        </div>
    );
};

export default Countrie;

/**
 * {
    "name": {
        "common": "Jamaica",
        "official": "Jamaica"
    },
    "ccn3": {
        "ccn3": "388"
    },
    "currencies": {
        "currencies": {
            "JMD": {
                "name": "Jamaican dollar",
                "symbol": "$"
            }
        }
    },
    "capital": {
        "capital": [
            "Kingston"
        ]
    },
    "region": {
        "region": "Americas"
    },
    "languages": {
        "languages": {
            "eng": "English",
            "jam": "Jamaican Patois"
        }
    },
    "area": {
        "area": 10991
    },
    "cca3": {
        "cca3": "JAM"
    },
    "population": {
        "population": 2961161
    },
    "continents": {
        "continents": [
            "North America"
        ]
    },
    "flags": {
        "flags": {
            "png": "https://flagcdn.com/w320/jm.png",
            "svg": "https://flagcdn.com/jm.svg",
            "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
        }
    }
}
 */