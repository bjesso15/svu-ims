import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'


export default function App() {
  return (
    <div>
      <h2>Welcome to my The SVU Women's Basketball Inventory Management System</h2>
      <br></br>
      <DisplayAthletes/>
    </div>
  );
}

const getAthletes = gql`
  query Athletes {
    athletes {
      id
      athleteFullName
      number
      year
      birthday
    }
  }
`;

function DisplayAthletes() {
  const { loading, error, data } = useQuery(getAthletes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ athleteFullName, number, year, birthday }) => (
    <div>
      <h3>Our Athletes</h3>
      <br />
      <b>About this location:</b>
      <p>This is a list of all the Women on the SVU Women's Basketball team.</p>
      <br />
    </div>
  ));
}
