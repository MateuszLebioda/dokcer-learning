const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    //Config name depends of server name in docker-compose.yaml
    host: 'redis-server',
    //Default redis port
    port: 6379
});

client.set("visits", 0)

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send(`Number of visits is ${visits}`)
        client.set('visits', parseInt(visits) + 1)
    })
})

app.listen(8081, () => {
    console.log("Listening on port 8081");
})