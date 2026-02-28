import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries';

const fetchCountries = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())
const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg text-success"></span>
          </div>
        }
      >
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </div>
  );
};

export default App;