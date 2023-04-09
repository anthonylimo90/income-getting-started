const express = require('express');
const sdk = require('api')('@okra/v2.0#kny21cldvn4yc8');

const app = express();

// app.use(express.urlencoded({extended: false}));

app.use(express.json({}));

sdk.auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGE2MzU4MTMwYTk0MzQ4NmYzM2RjZWQiLCJpYXQiOjE2NzU4NDk5NTR9.DP2dfE9xDXKwviPeMQa6a1_pXkxIa3C8G8kPbg9o1Vk');

app.post('/process', (req, res) => {
    console.log(req.body);
    let customerId = req.body.customerId;

    sdk.processincome({
        customer_id: customerId,
        version: '2'
    },{
        accept: 'application/json; charset=utf-8'
    })
    .then(({data}) => {
        console.log(data);
        res.send(data);
    })
    .catch(err => console.error(err));

});

app.post('/getincome', (req, res) => {

});


// sdk.processincome({
//     customer_id: '63d7a24da2a6c7003446746b',
//     version: '2'
// },{
//     accept: 'application/json; charset=utf-8'
// })
// .then(({data}) => console.log(data))
// .catch(err => console.error(err));

app.listen(3000, (error) => {
    if(!error) console.log(`Server is running on port 3000`);
    else console.log(`Something went wrong! ${error}`);
});