import mongoose from "mongoose";

// Define the MongoDB URI
const MONGO_URI = "mongodb://127.0.0.1:27017/transportDB";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define a Mongoose Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
});

const User = mongoose.model("User", userSchema);

// Sample Data
const users = [
  { name: "Alice", email: "alice@example.com", role: "admin" },
  { name: "Bob", email: "bob@example.com", role: "customer" },
  { name: "Charlie", email: "charlie@example.com", role: "driver" },
];

// Insert Data into MongoDB
const seedDatabase = async () => {
  try {
    await User.deleteMany(); // Clears existing data
    await User.insertMany(users);
    console.log("Seeder data inserted successfully!");
    mongoose.connection.close(); // Close the connection after inserting
  } catch (err) {
    console.error("Error inserting seeder data:", err);
  }
};

seedDatabase();
