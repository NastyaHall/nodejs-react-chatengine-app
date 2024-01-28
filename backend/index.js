const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "a409bf5b-18e8-4f2f-b137-4a8d658d9cc9" } }
        );
        return res.status(response.status).json(response.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});


app.listen(3001);