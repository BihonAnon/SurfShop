const db = require('../config/connection');
const { Product, User, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
  try {
    await Product.deleteMany({});

    await Product.create(productSeeds);

    for (let i = 0; i < productSeeds.length; i++) {
      await Product.create(productSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

    // for (let i = 0; i < userSeeds.length; i++) {
    //   await User.create(userSeeds[i]);
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

db.once('open', async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Category.deleteMany({});

    // await Category.create(categorySeeds);

    for (let i = 0; i < categorySeeds.length; i++) {
      await Category.create(categorySeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
