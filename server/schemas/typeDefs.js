const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    stock: Int
    price: Int
    image: String
    quantity: Int
    category: Category
  }

  type Comment {
      _id: ID
      commentText: String
      commentAuthor: String
      createdAt: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    # comments: [Comment]
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    # checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToCart(products: [ID]!): Order
    removeFromCart(products: [ID]!): Order
    addOrder(priceTotal: Int, products: [ID]): User
    # updateUser(username: String, firstName: String, lastName: String, email: String, password: String): User
    # updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;
