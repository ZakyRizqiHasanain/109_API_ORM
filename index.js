const express = require('express')
const app = express();
const PORT = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.listen(PORT, () => {
    console.log('server started on port 3000');
})

db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server started');
        });

    })
    .catch((err) =>{
        console.log(err);
    });

app.post("/komik", async (req, res) => {
    try {
        const komik = await db.Komik.create(req.body);
        res.status(201).json(komik);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

app.get('/komik', async (req, res) => {
    try {
        const komik = await db.Komik.findAll();
        res.send(komik);
    } catch (err) {
        res.send(err);
    }
});
