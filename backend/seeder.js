const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/product');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the MONGO_URI environment variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const sampleProducts = [
  {
    name: 'Product 1 ',
    description: 'This is a sample product description.',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Product 2',
    description: 'This is another sample product description.',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more sample products as needed
];

const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database', error);
    process.exit(1);
  }
};

seedDatabase();
