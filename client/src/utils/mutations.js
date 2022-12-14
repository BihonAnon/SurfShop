import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_TO_CART = gql`
  mutation addToCart($products: [ID]!) {
    addToCart(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_ORDER = gql`
mutation addOrder($priceTotal: Int, $products: [ID]) {
  addOrder(priceTotal: $priceTotal, products: $products) {
    username
    orders {
      purchaseDate
      products {
        name
      }
    }
  }
}
`;
