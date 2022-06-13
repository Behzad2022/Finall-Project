const { MongoClient, ObjectId } = require("mongodb");


require("dotenv").config();
const { MONGO_URI } = process.env

const options = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}

const getAppointments = async (req, res) => {

    const client = new MongoClient(MONGO_URI, options);
        
    try {
        await client.connect();
        const db = client.db("HVAC");

        const result = await db.collection("Appointments").find().toArray();

        if(result) {
            res.status(200).json({status:200, data:result});
        }

    } catch (err) {
        res.status(404).json({status:500, message:"Not Found"})
    }
    client.close();
};

module.exports = {getAppointments};