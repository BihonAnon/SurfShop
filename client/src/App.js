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
import Login from './components/Login'
import Shop from './components/Shop'
import Comments from './components/CommentList'

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


export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
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
                path="/shop"
                element={<Shop />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  )

}