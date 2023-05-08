import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Welcome to my The SVU Women's Basketball Inventory Management System</h1>
      <br></br>
      <DisplayAthletes/>
    </div>
  );
}

const getAthletes = gql`
query Athletes {
  athletes (first: 100) {
    athleteFullName
    birthday
    id
    number
    year
    inventory {
      jerseyNumber
      size
      inUse
    }
    travelGear {
      hoodieSize
      longSleeveSize
      shortSize
      sweatsSize
      tShirtSize
    }
  }
}
`;

function DisplayAthletes() {
  const { loading, error, data } = useQuery(getAthletes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.athletes.map(({ athleteFullName, number, year, birthday, id, inventory, travelGear }) => (
    <div key={id}>
      <div className="table">
        <div className="Row">
          <div className="Column">{athleteFullName} | {number}</div>
          <div className="Column">Jersey Size: {inventory?.size}</div>
          <div className="Column">Travel Gear Sizes: {travelGear?.hoodieSize}</div>
        </div>
      </div>
    </div>
  ));
}
