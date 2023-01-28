const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d4jrudo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const serviceCollection = client.db("clean_co").collection("services");
        console.log('db connected');

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', async (req, res) => {
    res.send('Clean Co Home');
})

app.listen(port, () => {
    console.log(`clean co is running in ${port}`);
}) 