const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require('uuid');


require("dotenv").config();
const { MONGO_URI } = process.env

const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}

const createAgent = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db("HVAC");
        const result = await db.collection("Agents").insertOne({
            ...req.body,
            _id: uuidv4(),
        });
        res.status(201).json({status:201, data: req.body});
    } catch (err) {
        res.status(500).json({status:500, data: req.body, message: err.message})
    }
    client.close();
};

module.exports = {createAgent}; 