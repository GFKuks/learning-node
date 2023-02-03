const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 9001;

var corsOptions = {
    origin: 'http://localhost:9000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());

let dummyData = [
    {
        id: 0,
        value: 15
    },
    {
        id: 1,
        value: 23
    },
    {
        id: 2,
        value: -7
    },
    {
        id: 3,
        value: 33
    },
    {
        id: 4,
        value: 56
    },
    {
        id: 5,
        value: 27
    },
    {
        id: 6,
        value: 70
    },
    {
        id: 7,
        value: 11
    },
    {
        id: 8,
        value: -12
    },
    {
        id: 9,
        value: 42
    },
    {
        id: 10,
        value: 99
    },
    {
        id: 11,
        value: 153
    },
    {
        id: 12,
        value: 120
    }
];

// Listens on specific port.
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.get("/test", (req, res) => {
    res.status(200).send({ data: dummyData });
});

app.post("/test", (req, res) => {
    const newEntry = { id: new Date().getTime(), value: req.body.value };
    dummyData.push(newEntry);
    res.status(200).send("Added new entry");
});

app.delete("/test/:id", (req, res) => {
    const { id } = req.params;
    // TODO: If id not found, send error?
    dummyData = dummyData.filter(x => x.id !== Number(id))
    res.status(200).send({ message: "Well done", data: dummyData });
});
