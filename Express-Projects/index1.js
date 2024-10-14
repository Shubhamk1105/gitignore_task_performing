// const { MongoClient } = require('mongodb');

// // Replace the following with your MongoDB connection string
// const url = 'mongodb://localhost:27017'; // Use your MongoDB connection URL
// const dbName = 'user_database'; // Use your specified database name

// async function run() {
//     const client = new MongoClient(url);

//     try {
//         // Connect to the MongoDB server
//         await client.connect();
//         console.log("Connected to database");

//         const db = client.db(dbName);

//         // Insert Users
//         const usersCollection = db.collection('users');
//         const usersData = [
//             {
//                 username: "john_doe",
//                 email: "john@example.com",
//                 password: "password123",
//                 createdAt: new Date(),
//             },
//             {
//                 username: "jane_doe",
//                 email: "jane@example.com",
//                 password: "password456",
//                 createdAt: new Date(),
//             },
//             {
//                 username: "alice_smith",
//                 email: "alice@example.com",
//                 password: "password789",
//                 createdAt: new Date(),
//             },
//             {
//                 username: "bob_johnson",
//                 email: "bob@example.com",
//                 password: "password101",
//                 createdAt: new Date(),
//             }
//         ];
        
//         const usersInsertResult = await usersCollection.insertMany(usersData);
//         console.log(`Inserted ${usersInsertResult.insertedCount} users into the collection`);

//         // Insert Events
//         const eventsCollection = db.collection('events');
//         const eventsData = [
//             {
//                 title: "Tech Conference 2024",
//                 description: "Join us for the annual tech conference.",
//                 date: new Date("2024-09-15"),
//                 location: "San Francisco, CA",
//                 createdAt: new Date(),
//                 uniqueUserCount: 0,
//             },
//             {
//                 title: "Art Festival",
//                 description: "A celebration of art and culture.",
//                 date: new Date("2024-10-05"),
//                 location: "New York, NY",
//                 createdAt: new Date(),
//                 uniqueUserCount: 0,
//             },
//             {
//                 title: "Cooking Class",
//                 description: "Learn how to cook gourmet dishes.",
//                 date: new Date("2024-11-01"),
//                 location: "Los Angeles, CA",
//                 createdAt: new Date(),
//                 uniqueUserCount: 0,
//             },
//             {
//                 title: "Music Concert",
//                 description: "Enjoy live music from various artists.",
//                 date: new Date("2024-12-20"),
//                 location: "Chicago, IL",
//                 createdAt: new Date(),
//                 uniqueUserCount: 0,
//             }
//         ];
        
//         const eventsInsertResult = await eventsCollection.insertMany(eventsData);
//         console.log(`Inserted ${eventsInsertResult.insertedCount} events into the collection`);
//     } catch (error) {
//         console.error('Error inserting data:', error);
//     } finally {
//         // Close the connection to the database
//         await client.close();
//     }
// }

// run().catch(console.error);
