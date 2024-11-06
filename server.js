const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send("hello world coding");
})

app.get('/time' , (req, res) => {
    const current_Time = new Date();
    res.send(`Current Date and Time IS: ${current_Time}`)
});

app.get('/user' , (req, res) => {
    const profile = {
        name : "IH-TUSHAR",
        age : 27,
        location : "Comilla Bangladesh"
    }

    res.json(profile);
})

app.listen(PORT, () => {
    console.log("server is running in port:3000");
    
});

