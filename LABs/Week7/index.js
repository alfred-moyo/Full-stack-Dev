var express = require("express");
let app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.set('json spaces', 3);


const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./dbconnection.properties');

const dbPrefix = properties.get('db.prefic');
const dbHost = properties.get('db.host');
const dbName = properties.get('db.name');
const dbUser = properties.get('db.user');
const dbPassword = properties.get('db.password');
const dbParams = properties.get('db.params');

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `${dbPrefix}${dbPassword}${dbHost}${dbParams}`;

const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

let db1;
 async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db1 = client.db('Kitten');
        const collections = await db1.listCollections().toArray();
        console.log(collections);
        app.locals.db = db1;
    } catch (err) {
        console.error('MongoDB connection error: ', err)
    }
 }
connectDB();

app.param('collectionName', async function(req, res, next, collectionName){
    const db = req.app.locals.db;

    const collections = await db.listCollections().toArray();

    req.collection = db.collection(collectionName);

    next();

});

//Ensure this route is defined after the middleware
app.get('collections/:collectionName', async function (req, res, next) {
    try {
        console.log('Received request for collection:', req.params.collectionName);
        console.log('Accessing collection:', req.collection.collectionName);
        //Fetch all documents from the specified collection
        const results = await req.collect.find({}).toArray();
        console.log('Retrieved documents:', results);
    } catch (err) {
        console.error('Error fetching documents:', err.message);
        next(err);
    }
});