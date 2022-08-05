const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Comment } = require('../models');
const { signToken } = require('../utils/auth');
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
      
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('comments');
        },
        categories: async () => {
            return await Category.find();
        },
        products: async (parent) => {
            return await Product.find({}).populate('category');
        },

        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },

        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
              });
      
              return user.orders.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        },

        // users: async () => {
        //     return User.find().populate('comments');
        //   },

          

          // comments: async (parent, { username }) => {
          //   const params = username ? { username } : {};
          //   return Comment.find(params).sort({ createdAt: 1 });
          // },

          // comment: async (parent, { commentId }) => {
          //   return Comment.findOne({ _id: commentId });
          // },

        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         return User.findOne({ _id: context.user._id }).populate('comments');
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        //   },
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

        // addComment: async (parent, { commentText }, context) => {
        //     if (context.user) {
        //       const comment = await Comment.create({
        //         commentText,
        //         commentAuthor: context.user.username,
        //       });
            
        //       return comment;
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        //   },

          
          // updateProduct: async (parent, { _id, stock }) => {
          //   const decrement = Math.abs(stock) * -1;
      
          //   return await Product.findByIdAndUpdate(_id, { $inc: { stock: decrement } }, { new: true });
          // },

        addToCart: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
              const order = new Order({ products });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
              return order;
            }
      
            throw new AuthenticationError('Not logged in');
        },

        removeFromCart: async (parent, { products }, context) => {
          console.log(context);
          if (context.user) {
            const order = new Order({ products });
    
            await User.findByIdAndUpdate(context.user._id, { $pull: { orders: order } });
    
            return order;
          }
    
          throw new AuthenticationError('Not logged in');
        },

    }
}










module.exports = resolvers;