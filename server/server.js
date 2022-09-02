const express = require("express")
const cors = require("cors")


const app = express()
const {getHTML,getCoins,addCoinToWatchlist,deleteCoin}= require("./controller")


// const request = require('request');
// const options = {
//   method: 'GET',
//   url: 'https://api.coinranking.com/v2/coins',
//   headers: {
//     'x-access-token': 'your-api-key'
//   }
// };

// request(options, (error, response) => {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

app.use(cors())
app.use(express.json())
app.use(express.static("public"))


app.get("/",getHTML)
app.get("/getCoins",getCoins)
app.post("/postCoin",addCoinToWatchlist)
app.delete("/deleteCoins",deleteCoin)
// app.get("/",getCoinsInWatchlist)

app.listen(4000,console.log("Server running on 4000"))