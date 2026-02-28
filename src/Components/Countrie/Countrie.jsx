import React from 'react';

const Countrie = ({countrie}) => {
    // console.log(countrie.name.common);
    
    return (
        <div>
            <img src={countrie.flags.flags.png} alt="" />
            <h1>{countrie.name.common}</h1>
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