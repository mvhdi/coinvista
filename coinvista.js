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
        ticker[i]["percent_change_24h"]
    ];
    i++;
  };

// create array of object that is the data input for the treemap
  dataForTreeMap= [
    {"name": "Bitcoin", "algo": "SHA256d", "symbol": tickerMap["Bitcoin"][0], "rank" : (tickerMap["Bitcoin"][1]), "market_cap_usd": parseFloat(tickerMap["Bitcoin"][2]), "24h_volume_usd": (tickerMap["Bitcoin"][3]), "max_supply": (tickerMap["Bitcoin"][4]), "available_supply": (tickerMap["Bitcoin"][5]), "price_usd": (tickerMap["Bitcoin"][6]), "price_btc": (tickerMap["Bitcoin"][7]), "percent_change_1h": (tickerMap["Bitcoin"][8]), "percent_change_7d": (tickerMap["Bitcoin"][9]), "percent_change_24h": (tickerMap["Bitcoin"][10]), "color" : determineColor(tickerMap["Bitcoin"][10])   },

    {"name": "XRP", "algo": "ECDSA", "symbol": tickerMap["XRP"][0], "rank" : (tickerMap["XRP"][1]), "market_cap_usd": parseFloat(tickerMap["XRP"][2]), "24h_volume_usd": (tickerMap["XRP"][3]), "max_supply": (tickerMap["XRP"][4]), "available_supply": (tickerMap["XRP"][5]), "price_usd": (tickerMap["XRP"][6]), "price_btc": (tickerMap["XRP"][7]), "percent_change_1h": (tickerMap["XRP"][8]), "percent_change_7d": (tickerMap["XRP"][9]), "percent_change_24h": (tickerMap["XRP"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    },
    
    {"name": "Ethereum", "algo": "Ethereum", "symbol": tickerMap["Ethereum"][0], "rank" : (tickerMap["Ethereum"][1]), "market_cap_usd": parseFloat(tickerMap["Ethereum"][2]), "24h_volume_usd": (tickerMap["Ethereum"][3]), "max_supply": (tickerMap["Ethereum"][4]), "available_supply": (tickerMap["Ethereum"][5]), "price_usd": (tickerMap["Ethereum"][6]), "price_btc": (tickerMap["Ethereum"][7]), "percent_change_1h": (tickerMap["Ethereum"][8]), "percent_change_7d": (tickerMap["Ethereum"][9]), "percent_change_24h": (tickerMap["Ethereum"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    },
    
    {"name": "Bitcoin Cash", "algo": "SHA256d", "symbol": tickerMap["Bitcoin Cash"][0], "rank" : (tickerMap["Bitcoin Cash"][1]), "market_cap_usd": parseFloat(tickerMap["Bitcoin Cash"][2]), "24h_volume_usd": (tickerMap["Bitcoin Cash"][3]), "max_supply": (tickerMap["Bitcoin Cash"][4]), "available_supply": (tickerMap["Bitcoin Cash"][5]), "price_usd": (tickerMap["Bitcoin Cash"][6]), "price_btc": (tickerMap["Bitcoin Cash"][7]), "percent_change_1h": (tickerMap["Bitcoin Cash"][8]), "percent_change_7d": (tickerMap["Bitcoin Cash"][9]), "percent_change_24h": (tickerMap["Bitcoin Cash"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    },
    
    {"name": "EOS", "algo": "DPoS", "symbol": tickerMap["EOS"][0], "rank" : (tickerMap["EOS"][1]), "market_cap_usd": parseFloat(tickerMap["EOS"][2]), "24h_volume_usd": (tickerMap["EOS"][3]), "max_supply": (tickerMap["EOS"][4]), "available_supply": (tickerMap["EOS"][5]), "price_usd": (tickerMap["EOS"][6]), "price_btc": (tickerMap["EOS"][7]), "percent_change_1h": (tickerMap["EOS"][8]), "percent_change_7d": (tickerMap["EOS"][9]), "percent_change_24h": (tickerMap["EOS"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    }
   
    // {"name": "XRP", "algo": "ECDSA"},
    // {"name": "Ethereum", "algo": "EtHash"},
    // {"name": "Bitcoin Cash", "algo": "SHA256d"},
    // {"name": "EOS", "algo": "DPoS"},
    // {"name": "Litecoin", "algo": "Scrypt"},
    // {"name": "Tether", "algo": "Omni"},
    // {"name": "Monero", "algo": "CryptoNight"},
    // {"name": "TRON", "algo": "Other"},
    // {"name": "MIOTA", "algo": "DAG"},


    // {"name": "Dash", "algo": "X11"},
    // {"name": "Binance Coin", "algo": "Ethereum"},
    // {"name": "NEM", "algo": "Apostille"},
    // {"name": "Ethereum Classic", "algo": "EtHash"},
    // {"name": "NEO", "algo": "dBFT"},
    // {"name": "Zcash", "algo": "Equihash"},
    // {"name": "Tezos", "algo": "PoS"},
    // {"name": "Bitcoin Gold", "algo": "Equihash"},
    // {"name": "Ontology", "algo": "Other"},
    // {"name": "VeChain", "algo": "Other"},

    // {"name": "Dogecoin", "algo": "Scrypt"},
    // {"name": "Maker", "algo": "Ethereum"},
    // {"name": "OmiseGO", "algo": "Ethereum"},
    // {"name": "0x", "algo": "Ethereum"},
    // {"name": "Qtum", "algo": "PoS"},
    // {"name": "Decred", "algo": "Blake 256"},
    // {"name": "Basic Attention Token", "algo": "Ethereum"},
    // {"name": "TrueUSD", "algo": "Ethereum"},
    // {"name": "USD Coin", "algo": "Ethereum"},
    // {"name": "Lisk", "algo": "DPoS"},

    // {"name": "Bytecoin", "algo": "CryptoNight"},
    // {"name": "Bitcoin Diamond", "algo": "X13"},
    // {"name": "Paxos Standard Token", "algo": "Ethereum"},
    // {"name": "Nano", "algo": "DPoS"},
    // {"name": "Aurora", "algo": "Ethereum"},
    // {"name": "Aeternity", "algo": "Ethereum"},
    // {"name": "BitShares", "algo": "DPoS"},
    // {"name": "Zilliqa", "algo": "Ethereum"},
    // {"name": "ICON", "algo": "Other"},
    // {"name": "DigiByte", "algo": "Multiple"},

    // {"name": "siacoin", "algo": "Mixed"},
    // {"name": "Steem", "algo": "DPoS"},
    // {"name": "Chainlink", "algo": "Ethereum"},
    // {"name": "Pundi X", "algo": "Ethereum"},
    // {"name": "Waves", "algo": "PoS"},
    // {"name": "Bytom", "algo": "Scrypt"},
    // {"name": "Augur", "algo": "Ethereum"},
    // {"name": "Verge", "algo": "Scrypt"},
    // {"name": "Golem", "algo": "Ethereum"},
    // {"name": "Populous", "algo": "Ethereum"},

    // {"name": "MaidSafeCoin", "algo": "Omni"},
    // {"name": "Stratis", "algo": "X13"},
    // {"name": "Electroneum", "algo": "CryptoNight"},
    // {"name": "Holo", "algo": "Ethereum"},
    // {"name": "Status", "algo": "Ethereum"},
    // {"name": "QASH", "algo": "Ethereum"},
    // {"name": "Factom", "algo": "Mixed"},
    // {"name": "Komodo", "algo": "Equihash"},
    // {"name": "Cryptonex", "algo": "Scrypt"},
    // {"name": "Revain", "algo": "Ethereum"},

    // {"name": "IOST", "algo": "Ethereum"},
    // {"name": "Ardor", "algo": "PoS"},
    // {"name": "Decentraland", "algo": "Ethereum"},
    // {"name": "Metaverse ETP", "algo": "EtHash"},
    // {"name": "", "algo": ""},
    // {"name": "", "algo": ""},
    // {"name": "", "algo": ""},
    // {"name": "", "algo": ""},
    // {"name": "", "algo": ""},
    // {"name": "", "algo": ""},
  ];



  // --------- how to create the data object
// var list = [];
// list.push({ date: '12/1/2011', reading: 3, id: 20055 });


// ------------ draw out the actual treemap ---------------
  var coinvista = d3plus.viz()
    .container("#viz")
    .data(dataForTreeMap)
    .type("tree_map")
    .id(["algo","name","name"])
    .size("market_cap_usd")
    .depth(0)
    .font({ "size": 20, "spacing": 5, "weight":700 })
    .color("color")
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
        if (text == "Bitcoin") {
            var newV =  text.toUpperCase()+"  "+tickerMap["Bitcoin"][10]+"%"+"\n "+"\n"+ "$"+d3.round(tickerMap["Bitcoin"][6])
            return newV
        }
        else if(text == "Bitcoin Cash"){
            var newV =  text.toUpperCase()+"  "+tickerMap["Bitcoin Cash"][10]+"%"+"\n "+"\n"+ "$"+d3.round(tickerMap["Bitcoin Cash"][6])
            return newV
        }
        else {
            return text.toUpperCase()
        }
      }
    })
    .labels({"align": "center", "valign": "top", "size": 100, "family": "Helvetica Neue", "spacing": 5, "weight":700 })
    .tooltip(["symbol", "price_usd", "price_btc" ,"percent_change_1h","percent_change_24h","percent_change_7d","market_cap_usd","24h_volume_usd","available_supply"])
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

