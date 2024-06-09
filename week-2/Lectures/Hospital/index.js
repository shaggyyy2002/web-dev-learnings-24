const express = require("express");
const app = express();

const users = [{
    name: "Nitin",
    kidneys: [{
        health :false
    }]
}];

app.use(express.json);

// query params
app.get("/", function(req, res) {
    const nitinkidneys = users[0].kidneys;
    const numberofkidneys = nitinkidneys.length;
    let numberofHealthykidneys = 0;
    for (let i = 0; i<nitinkidneys.length; i++) {
        if (nitinkidneys[i].healthy) {
            numberofHealthykidneys = numberofHealthykidneys + 1;
        }
    }  
    const numberofUnHealthykidneys = numberofkidneys - numberofHealthykidneys
    res.json({
        numberofkidneys,
        numberofHealthykidneys,
        numberofUnHealthykidneys
    })
}) 

app.post("/", function(req, res){

    const ishealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
       msg: "Done!" 
    })
})

app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){
    const newKidneys = [];
    for(let i = 0; i<users[0].kidneys[i].length; i++) {
        if (users[0].kidneys[i].health){
            newKidneys.push({
                healthy: true
            })
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done!"})
    }
})

app.listen(3000);