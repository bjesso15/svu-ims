// import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost'
import React from 'react';
import './App.css';


export default function App() {
  return (
    <div className = "container">
      <h2>Welcome to my The SVU Women's Basketball Inventory Management System</h2>
      <br></br>
    </div>
  );
}


// const getAthletes = gql`
// query Athletes {
//   athletes {
//     athleteFullName
//     number
//     year
//     birthday
//   }
// }
// `;


// function DisplayAthletes() {
//     const { loading, error, data } = useQuery(getAthletes);
  
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error : {error.message}</p>;
  
//     return data.locations.map(({ athleteFullName, number, year, birthday }) => (
//       <div key={id}>
//         <h3>SVU Athletes</h3>
//         <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//         <br />
//         <b>About this location:</b>
//         <p>This is a description</p>
//         <br />
//       </div>
//     ));
//     return data.locations.map(({ id }) => (
//       <div key={id}>
//         <h3>{id}</h3>
//       </div>
//     ));
//   }