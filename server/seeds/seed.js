const db = require('../config/connection');
const { Product } = require('../models');
// const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');

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