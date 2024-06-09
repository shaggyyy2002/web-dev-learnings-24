// creating an http server
// using express
// is Express node default? NO
// so bring it locally
// $ npm install express
const express = require("express")

function sum(n) {
    let ans = 0;
    for (let i = 1; i <=n; i++){
        ans = ans + i;
    }
    return ans;
}

// creating the clinic
const app  = express();
console.log("port running on 3000")

// req, res ==> request to take (inputs, headers) , responds to send (status code)
app.get("/", function(req, res){
    // query param
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi your ans is " + ans);
})

// doctor taking a clinic
app.listen(3000)