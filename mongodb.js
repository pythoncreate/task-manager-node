// CRUD create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

//Mongo Connection

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database.");
    }
    const db = client.db(databaseName);
    console.log("Connected");

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28
    //     },
    //     {
    //       name: "Chris",
    //       age: 43
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert document");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Paint House",
    //       completed: false
    //     },
    //     {
    //       description: "Fix front porch",
    //       completed: false
    //     },
    //     { description: "Close pool", completed: false }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert document");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5d6ff3ee35b3863b2801319f") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5d70013471ad2c2720fd5d84") },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Cannot find that task");
    //     }
    //     console.log(task);
    //   }
    // );
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Cant find any tasks");
    //     }
    //     console.log(tasks);
    //   });

    // const updatePromise = db.collection("users").updateOne(
    //   {
    //     _id: new ObjectID("5d6f108589ace73a702cc77a")
    //   },
    //   {
    //     $inc: {
    //       age: 1
    //     }
    //   }
    // );
    // db.collection("users")
    //   .deleteMany({
    //     age: 43
    //   })
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteMany({
        description: "Paint House"
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });

    // const updatePromise = db.collection("tasks").updateMany(
    //   {
    //     completed: false
    //   },
    //   {
    //     $set: {
    //       completed: true
    //     }
    //   }
    // );
    // updatePromise
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
);
