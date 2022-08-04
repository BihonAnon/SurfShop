const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Comment } = require('../models');
const { signToken } = require('../utils/auth');
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
          },
          products: async (parent) => {

            // const params = {};
      
            // if (category) {
            //   params.category = category;
            // }
      
            // if (name) {
            //   params.name = {
            //     $regex: name
            //   };
            // }
      
            return await Product.find({}).populate('category');
          },

          product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
          },

        users: async () => {
            return User.find().populate('comments');
          },

          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments');
          },

          comments: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Comment.find(params).sort({ createdAt: 1 });
          },

          comment: async (parent, { commentId }) => {
            return Comment.findOne({ _id: commentId });
          },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('comments');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        addComment: async (parent, { commentText }, context) => {
            if (context.user) {
              const comment = await Comment.create({
                commentText,
                commentAuthor: context.user.username,
              });
            
              return comment;
            }
            throw new AuthenticationError('You need to be logged in!');
          },

          // addCategory: async (parent, args) => {
          //   const category = await Category.create(args);
      
          //   return { category };
          // },

          // addProduct: async (parent, args) => {
          //   const product = await Product.create(args);
      

          //   return { product };
          // },

          // updateProduct: async (parent, { _id, stock }) => {
          //   const decrement = Math.abs(stock) * -1;
      
          //   return await Product.findByIdAndUpdate(_id, { $inc: { stock: decrement } }, { new: true });
          // },

          // /////addToCart: async ()

          // ..removeFromCart: async ()

          ////// checkout: async ()
    }
}










module.exports = resolvers;