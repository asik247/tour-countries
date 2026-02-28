import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries';

const fetchCountries = fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())
const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loadding...</h1>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </div>
  );
};

export default App;