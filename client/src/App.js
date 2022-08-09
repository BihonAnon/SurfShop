import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header'
import Home from './components/Home'
import Login from './pages/Login'
import Shop from './components/Shop'
import Signup from './pages/Signup';

import Comments from './components/CommentList'
import StripeContainer from './components/StripeContainer';

// import Footer from './components/Footer'

let myCart = [];
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function payment() {
//   const [showItem, setShowItem] = useState(false)
//   return (
//     <div className="App">
//       <h1>Surf</h1>
//       {showItem ? <StripeContainer/> : <> <h3>#10.00</h3> <img src="" alt="" />
//       <button onClick={() => setShowitem(true)}>Purchase</button></>}
//     </div>
//   );
// }

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
       
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/header"
                element={<Header />}
              />
              <Route
                path="/comments"
                element={<Comments />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route
                path="/shop"
                element={<Shop />}
              />
            </Routes>
          </div>
       
      </Router>
    </ApolloProvider>
  )

}