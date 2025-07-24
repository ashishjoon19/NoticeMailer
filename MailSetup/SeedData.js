import mongoose from 'mongoose';
import User from './models/User.model.js'; 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mail', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function seedUsers() {
    try {
        // Clear existing users
        await User.deleteMany({});

        // Seed data
        const users = [
            {
                name: "Alice Sharma",
                email: "alicesharma@gmail.com",
                role: "employee",
                department: "HR"
            },
            {
                name: "Bob Singh",
                email: "bobsingh@gmail.com",
                role: "employee",
                department: "Finance"
            },
            {
                name: "Charlie Gupta",
                email: "charliegupta@gmail.com",
                role: "client",
                department: null
            },
            {
                name: "Diana Verma",
                email: "dianaverma@gmail.com",
                role: "employee",
                department: "IT"
            },
            {
                name: "Esha Client",
                email: "eshaclient@gmail.com",
                role: "client",
                department: null
            }
        ];

        // Insert data
        await User.insertMany(users);
        console.log("✅ Users seeded successfully.");
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

seedUsers();
