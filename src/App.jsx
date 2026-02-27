import React, { useEffect, useState } from 'react';
// Fetch all countries
// fetch("https://openapi.programming-hero.com/api/all")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Fetch country by ISO code
// fetch("https://openapi.programming-hero.com/api/alpha/116")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Fetch countries by language
// fetch("https://openapi.programming-hero.com/api/lang/english")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Fetch country by name
// fetch("https://openapi.programming-hero.com/api/name/bangladesh")
//   .then((res) => res.json())
//   .then((data) => console.log(data));




const App = () => {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/all");
        const datas = res.json()
        setUsers(datas);
      } catch (error) {
        console.log("Error Message",error);
      }
    }
    fetchDatas()
  }, [])
  return (
    <div>
      {
        console.log(users)
      }
    </div>
  );
};

export default App;