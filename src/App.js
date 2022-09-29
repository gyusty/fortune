import './App.scss';
import React, {useState} from "react";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import GetUsers from './Components/GetUsers';
import FormComponent from './Components/FormComponent';
import TicketComponent from './Components/TicketComponent';



const errorLink = onError(({graphqlErrors, networkError}) => { 
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message} `)
    })
  } 
})

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:6969/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})


function App() {

  const [user, setUser] = useState();
  const [showTicket, setShowTicket] = useState(false);

  const getUserForm = (newUser) => { 
    setUser(newUser);
    setShowTicket(true);
  }

  const closeModal = () => { 
    setShowTicket(false)
  }

  return (
    <ApolloProvider client={client}> 
      <div className='main-container'>
        <FormComponent getUserForm={getUserForm}></FormComponent>
        {showTicket ? ( <TicketComponent user={user} closeModal={closeModal}></TicketComponent>) : null}

      </div>
    </ApolloProvider>
  );
}

export default App;
