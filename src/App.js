import Login from './components/login';
import Home from './components/home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000', // The GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
  </ApolloProvider>
  );
}

export default App;
