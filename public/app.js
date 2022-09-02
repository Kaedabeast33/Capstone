



let baseId=-1

const coinData = document.querySelector(".coinData")
const watchlist = document.getElementById("watchlisttable1")
const undisapearBtn=document.querySelector(".undisappear")
const watchlistRefresherBtn=document.querySelector(".watchlistRefresher"
)
const disappear1 = document.querySelector(".disappear1")

let baseUrl = "http://localhost:4000"

let refresher = document.getElementById("coinRefresher")
const deleteCoin = (evt)=>{
    console.log(evt)
    axios.delete(`${baseUrl}/deleteCoins/`,{data:{uuid:evt}})
   .then(res=>{
       console.log(res)
       
   })
}
const getCoins = (evt)=>{
  evt.preventDefault()
    axios.get(`http://localhost:4000/getCoins/`)
        .then((res=>{
            
         console.log("sent")
      
       
            let coins = res.data.data.coins
           console.log(coins)
            
        coins.forEach(element => {
            
            const coinslists = coinsHandler(element)
            coinData.innerHTML+=coinslists
        });
         
         }
        )).catch(err=>{
            
            console.log(err)
        })
}

const addCoinToWatchlist = (evt) =>{
    axios.post(`${baseUrl}/postCoin`,{uuid:evt})
  
   
    .then(res=>{
       console.log(res)
       watchlist.innerHTML=`      <tr>
       <th class="col">#</th>
       <th class="col">Symbol</th>
       <th class="col">UUID</th>
       <th class="col">BTC Price</th>
       <th class="col">Rank</th>
      
       <th class="col">Name</th>
       <th class="col">Price</th>
       <th class="col">Price</th>
       
      
   </tr>`

            res.data.forEach(element=>{
                let baseId=0
                let coinslists = coinsHandler(element)
                let {uuid,symbol,name,iconUrl,price,btcPrice,rank,coinrankingUrl}=element
                // console.log(element)
                
                watchlist.innerHTML +=`
                <tr class ="addedCoins ${baseId}" id="${uuid}" onClick="deleteCoin(this.id)">
                    <th scope="row">${baseId+1}</td>
                    <td class="col">${symbol}</td>
                    <td class="col">${uuid}</td>
                    <td class="col">${btcPrice}</td>
                    <td class="col">${rank}</td>
                    
                    <td class="col">${name}</td>
                     <td class="col">${price}</td>
                     <td class="col" >X</td>
                   
                
                </tr>
                                        `

                console.log(element)
            })
            
//     }).catch(err=>{
//         console.log(err)
        })
//    console.log(watchlist)

    
}

    


function coinsHandler(coins){
    // console.log(coins)
    let {uuid,symbol,name,iconUrl,price,btcPrice,rank,coinrankingUrl}=coins
  
    baseId++
    return `
<tr class ="addedCoins ${baseId}" id="${uuid}" onClick="addCoinToWatchlist(this.id)">
    <th class="col">${baseId+1}
    <th class="col">${symbol}</th>
    <th class="col">${uuid}</th>
    <th class="col">${btcPrice}</th>
    <th class="col">${rank}</th>
    
    <th class="col">${name}</th>
     <th class="col">${price}</th>
   

</tr>
                        `



}

refresher.addEventListener("click",getCoins)
undisapearBtn.addEventListener("click",()=>{
    disappear1.classList.toggle("disappear1")
})
addCoinToWatchlist()
// watchlistRefresherBtn.addEventListener("click",getCoinsInWatchlist)