import React, { Suspense } from 'react';
import Countries from './Components/Countries/Countries';
// fetch all countries data and return promise;
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
        {/* countires componet retern promese */}
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </div>
  );
};

export default App;
