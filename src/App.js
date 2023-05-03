import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost'

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <DisplayAthletes />
    </div>
  );
}

const getRecipes = gql`
query Recipes {
  recipes {
    ingredients
    instructions
    description
    mealType
    title
    slug
    id
  }
}
`

const GET_ATHLETES = gql` {
  query MyQuery {
    athletes {
      athleteFullName
      birthday
      id
      number
      year
    }
  }
}`;


function DisplayAthletes() {
    const { loading, error, data } = useQuery(getRecipes);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    // return data.locations.map(({ id, name, description, photo }) => (
    //   <div key={id}>
    //     <h3>{name}</h3>
    //     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
    //     <br />
    //     <b>About this location:</b>
    //     <p>{description}</p>
    //     <br />
    //   </div>
    // ));
    return data.locations.map(({ id }) => (
      <div key={id}>
        <h3>{id}</h3>
      </div>
    ));
  }