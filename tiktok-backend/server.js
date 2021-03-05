import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js';
import Cors from 'cors';

// app config
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
// app.use(Cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Headers', '*'),
        next()

});

// db config
const dbUrl = 'mongodb+srv://admin:DGeVwQCS8KKsyry2@cluster0.kbv2w.mongodb.net/tiktokClone?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Api endpoints
app.get('/', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});


app.post('/', (req, res) => {
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });

});

app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`));