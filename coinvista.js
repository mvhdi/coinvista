// Author: Mahdi Mohamed
// start: 11/22/18
// https://github.com/mvhdi/coinvista
// https://github.com/coinvista/coinvista

// All functions need to called inside the d3.json to access ticker data
d3.json('https://api.coinmarketcap.com/v1/ticker/', function(data) {

// initalize global variables
  var ticker= data;
  var dataForTreeMap;
  var tickerMap={};
  var currentCoin="level 0"
  var currentDepth = 0;

  // --------- parse the ticker data from the api and put into map
  var i = 0;
  while (i<100){
    // console.log(ticker[i].id)
    tickerMap[ticker[i]["name"]] = [
        ticker[i]["symbol"],
        ticker[i]["rank"],
        ticker[i]["market_cap_usd"],
        ticker[i]["24h_volume_usd"],
        ticker[i]["max_supply"],
        ticker[i]["available_supply"],
        ticker[i]["price_usd"],
        ticker[i]["price_btc"],
        ticker[i]["percent_change_1h"],
        ticker[i]["percent_change_7d"],
        ticker[i]["percent_change_24h"],
        
    ];
    i++;
  };

// create array of object that is the data input for the treemap
    var algoMap = {};
    algoMap["Bitcoin"]=["SHA256d"];
    algoMap["XRP"]=["ECDSA"];
    algoMap["Ethereum"]=["EtHash"];
    algoMap["Bitcoin Cash"]=["SHA256d"];
    algoMap["EOS"]=["DPoS"];
    algoMap["IOST"] = ["Ethereum Token"];
  
    algoMap["Litecoin"]=["Scrypt"];
    algoMap["Tether"]=["Omni"];
    algoMap["Monero"]=["CryptoNight"];
    algoMap["TRON"]=["Other"];
    algoMap["IOTA"]=["DAG"];
    algoMap["Dash"]=["X11"];
    algoMap["Binance Coin"]=["Ethereum Token"];
    algoMap["NEM"]=["Apostille"];
    algoMap["Ethereum Classic"]=["EtHash"];
    algoMap["NEO"]=["dBFT"];
    algoMap["Zcash"]=["Equihash"];
    algoMap["Tezos"]=["PoS"];
    algoMap["Bitcoin Gold"]=["Equihash"];
    algoMap["Ontology"]=["Other"];
    algoMap["VeChain"]=["Other"];

    algoMap["Dogecoin"]=["Scrypt"];
    algoMap["Maker"]=["Ethereum Token"];
    algoMap["OmiseGO"]=["Ethereum Token"];
    algoMap["0x"]=["Ethereum Token"];
    algoMap["Qtum"]=["PoS"];
    algoMap["Decred"]=["Blake 256"];
    algoMap["Basic Attention Token"]=["Ethereum Token"];
    algoMap["TrueUSD"]=["Ethereum Token"];
    algoMap["USD Coin"]=["Ethereum Token"];
    algoMap["Lisk"]=["DPoS"];

    algoMap["Bytecoin"]=["CryptoNight"];
    algoMap["Bitcoin Diamond"]=["X13"];
    algoMap["Paxos Standard Token"]=["Ethereum Token"];
    algoMap["Nano"]=["DPoS"];
    algoMap["Aurora"]=["Ethereum Token"];
    algoMap["Aeternity"]=["Ethereum Token"];
    algoMap["BitShares"]=["DPoS"];
    algoMap["Zilliqa"]=["Ethereum Token"];
    algoMap["ICON"]=["Other"];
    algoMap["DigiByte"]=["Mixed"];

    algoMap["Siacoin"]=["Mixed"];
    algoMap["Steem"]=["DPoS"];
    algoMap["Chainlink"]=["Ethereum Token"];
    algoMap["Pundi X"]=["Ethereum Token"];
    algoMap["Waves"]=["PoS"];
    algoMap["Bytom"]=["Scrypt"];
    algoMap["Augur"]=["Ethereum Token"];
    algoMap["Verge"]=["Scrypt"];
    algoMap["Golem"]=["Ethereum Token"];
    algoMap["Populous"]=["Ethereum Token"];

    algoMap["MaidSafeCoin"]=["Omni"];
    algoMap["Stratis"]=["X13"];
    algoMap["Electroneum"]=["CryptoNight"];
    algoMap["Holo"]=["Ethereum Token"];
    algoMap["Status"]=["Ethereum Token"];
    algoMap["QASH"]=["Ethereum Token"];
    algoMap["Factom"]=["Mixed"];
    algoMap["Komodo"]=["Equihash"];
    algoMap["Cryptonex"]=["Scrypt"];
    algoMap["Revain"]=["Ethereum Token"];

    algoMap["IOST"]=["Ethereum Token"];
    algoMap["Ardor"]=["PoS"];
    algoMap["Decentraland"]=["Ethereum Token"];
    algoMap["Metaverse ETP"]=["EtHash"]
    algoMap["Stellar"]=["SCP"];
    algoMap["Bitcoin SV"]=["SHA256d"];
    algoMap["Cardano"]=["Ouroboros"];
    algoMap["Dai"]=["Ethereum Token"];
    algoMap["Nexo"]=["Ethereum Token"];
    algoMap["WAX"]=["Ethereum Token"];

    algoMap["Huobi Token"]=["Ethereum Token"];
    algoMap["KuCoin Shares"]=["Ethereum Token"];
    algoMap["Insight Chain"]=["EOS"];
    algoMap["MonaCoin"]=["Scrypt"];
    algoMap["ODEM"]=["Ethereum Token"];
    algoMap["Waltonchain"]=["Ethereum Token"];
    algoMap["MOAC"]=["Other"];
    algoMap["Ravencoin"]=["Mixed"];
    algoMap["SIRIN LABS Token"]=["Ethereum Token"];
    algoMap["MobileGo"]=["Ethereum Token"];

    algoMap["Ark"]=["DPoS"];
    algoMap["Wanchain"]=["Other"];
    algoMap["PIVX"]=["PoS"];
    algoMap["GXChain"]=["DPoS"];
    algoMap["Mithril"]=["Ethereum Token"];
    algoMap["QuarkChain"]=["Mixed"];
    algoMap["HyperCash"]=["PoS"];
    algoMap["Mixin"]=["SHA256d"];
    algoMap["Polymath"]=["Ethereum Token"];
    algoMap["Bancor"]=["Ethereum Token"];

    algoMap["Theta Token"]=["Ethereum Token"];
    algoMap["ReddCoin"]=["PoS"];
    algoMap["Veritaseum"]=["Ethereum Token"];
    algoMap["Loopring"]=["Ethereum Token"];
    algoMap["DigixDAO"]=["Ethereum Token"];
    algoMap["Aion"]=["Ethereum Token"];
    algoMap["BOScoin"]=["PoS"];
    algoMap["Crypto.com"]=["Ethereum Token"];
    algoMap["Linkey"]=["Other"];


var list = [];
for (var k in tickerMap) {
    // list.push({ "name": tickerMap[k][0], reading: 3, id: 20055 });
    var xxx = algoMap[k];
    if (xxx != undefined){
        // console.log(xxx[0])
        list.push(
            { 
                "name": k, 
                "algo": xxx[0], 
                "symbol": tickerMap[k][0], 
                "rank" : (tickerMap[k][1]), 
                "market_cap_usd": parseFloat(tickerMap[k][2]), 
                "24h_volume_usd": (tickerMap[k][3]), 
                "max_supply": (tickerMap[k][4]), 
                "available_supply": (tickerMap[k][5]), 
                "price_usd": (tickerMap[k][6]), 
                "price_btc": (tickerMap[k][7]), 
                "percent_change_1h": (tickerMap[k][8]), 
                "percent_change_7d": (tickerMap[k][9]), 
                "percent_change_24h": (tickerMap[k][10]), 
                "color" : determineColor(tickerMap[k][10]), 
                "Name":k+"_" 
            }
        );

    }
    else{
                // console.log(k)
    }
  
}

// console.log(counter);


// ------------ draw out the actual treemap ---------------
  var coinvista = d3plus.viz()
    .container("#viz")
    .data(list)
    .type("tree_map")
    .id(["algo","name","Name"])
    .size("market_cap_usd")
    .depth(0)
    .font({ "size": 20, "spacing": 5, "weight":700 })
    .color("color")
    .legend({"value": false})
    .format({"text": function(text,key){
      // use info in key object to updated the currentDepth and currentCoin the user is looking at
      if(key["vars"] != undefined){
        currentDepth = key["vars"]["depth"]["value"];
        if(key["data"] != undefined){
          console.log(key["data"]["name"])
          currentCoin = key["data"]["name"];
        }
        // call redraw on mouse movements with the updated currentdepth and currentCoin
        redrawMouseMove();
        redrawMouseClick();
        redrawMouseOut();
        }
        if (tickerMap[text] != undefined) {
            var format =  d3.format(".3f");
            var newV =  tickerMap[text][0].toUpperCase()+"  "+tickerMap[text][10]+"%"+"\n "+"\n"+ "$"+format(tickerMap[text][6])
            return newV
        }
        else {
            return text.toUpperCase()
        }
      }
    })
    .labels({"align": "center", "valign": "top", "size": 100, "family": "Helvetica Neue", "spacing": 5, "weight":700 })
    .tooltip(["Name","price_usd", "price_btc" ,"percent_change_1h","percent_change_24h","percent_change_7d","market_cap_usd","24h_volume_usd","available_supply"])
    .draw()

//---------------------where functions go ---------------------------


// determines the color
function determineColor(input){
    var value = parseFloat(input);
    if (value >=0){
        return "#518651";
    }
    if(value <0){
        return "#C84040";
    }
};

// redraws when mouse is moved
function redrawMouseMove(){
  d3.selectAll("#viz").on("mousemove", function(d) {
    redraw()    
  })
}

// redraws when mouse is clicked
function redrawMouseClick(){
  d3.selectAll("#viz").on("click", function(d) {
    redraw()         
  })
}

// redraws when mouse is moved off the shape
function redrawMouseOut(){
  d3.selectAll("#viz").on("mouseout", function(d) {
    redraw()         
  })
}

// displays coin info deepending on the level of the treemap
function redraw(){
  // console.log(currentDepth);
  var x = document.getElementById("coin_info" );
  if (currentDepth == 2 ) {
    if(currentCoin === "Bitcoin"){
        // document.getElementById("myFrame").src = "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=619&pref_coin_id=1505";
        x.style.display = "block";
      }
  }
     
  if(currentDepth != 2 ){
    // console.log("you")
      x.style.display = "none";
  }

}


//    ------------------------- function to Dynamically create div elements will go here -----------------------
//     d3.selectAll("#vizz").selectAll("div").remove()

// // var btn = document.createElement("BUTTON");        // Create a <button> element
// // var t = document.createTextNode("CLICK ME");       // Create a text node
// // btn.appendChild(t);                                // Append the text to <button>
// // document.body.appendChild(btn);
// var d= document.getElementById('vizz');
// var dara = document.createElement("div");
// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);


// dara.appendChild(para);
// d.appendChild(dara);
// document.body.appendChild(d);

})

