import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  {
    user {
      username
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          name
          description
        _id
          stock
          price
          image
          quantity
        }
      }
    }
  }
  `;

export const QUERY_CATEGORIES = gql`
  {
  categories {
    _id
    name
  }
}
`;

export const QUERY_PRODUCTS = gql`
{
  products {
    _id
    name
    description
    stock
    price
    image
    quantity
    category {
      name
    }
  }
}
`;
export const QUERY_PRODUCT = gql`
query Product($id: ID!) {
  product(_id: $id) {
    _id
    name
    description
    stock
    price
    image
    quantity
    category {
      name
    }
  }
}
`;

export const QUERY_ORDER = gql`
query Query($id: ID!) {
  order(_id: $id) {
    _id
    purchaseDate
    products {
      _id
      name
      description
      price
      stock
      image
      quantity
    }
  }
}
`;