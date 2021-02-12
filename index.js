const express = require('express')
const config = require('./config');
const port = 8080;
const myapp = express();

myApp.listen(port, () => {
    `running on port ${port}`
});

myApp.get( "/", (req,res) => {
    res.status(200).send("Hello World");
});

const a = "a"
a = "b";

const obj = {
    wefr: {
        key: ['test']
    },
    wsfaer: 'string',
    wfrer: Boolean("1"),
    fdsaf: 'a',
    w3re4er: 1,
    sfe3: [
        [a, myApp]
    ],
    wefr: BigInt(1),
    we3fedsef4r: 2,
    test: 2,
}

let c = 2;

console.log(obj.test + c)

while(true) {
    console.log("true");
}

let b = 1;
