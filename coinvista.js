// Author: Mahdi Mohamed
// start: 11/22/18
// https://github.com/mvhdi/coinvista
// https://github.com/coinvista/coinvista

function makeviz(blockSizeBy,depthLevel,cat,period, currency){
// All functions need to called inside the d3.json to access ticker data
d3.json('https://api.coinlore.com/api/tickers/', function(data) {
    var inital = document.getElementById("coin_info" );
    inital.style.display = "none";
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
    tickerMap[ticker.data[i]["name"]] = [
        ticker.data[i]["symbol"],
        String(ticker.data[i]["rank"]),
        ticker.data[i]["market_cap_usd"],
        (ticker.data[i]["volume24"]),
        ticker.data[i]["msupply"],
        ticker.data[i]["tsupply"],
        ticker.data[i]["price_usd"],
        ticker.data[i]["price_btc"],
        ticker.data[i]["percent_change_1h"],
        ticker.data[i]["percent_change_7d"],
        ticker.data[i]["percent_change_24h"],
        
    ];
    i++;
  };

// create array of object that is the data input for the treemap
// algoMap contains extra data not from the ticker, and is created in coinInfo.js


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
                "color" : determineColor(parseFloat(tickerMap[k][period]))[0], 
                "status": determineColor(parseFloat(tickerMap[k][period]))[1], 
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
    .id([cat,"name","Name"])
    .size(blockSizeBy)
    .height(window.innerHeight-50)

    
    .depth(depthLevel)
    .font({ "size": 20, "spacing": 5, "weight":700 })
    .color("color")
    .legend({"value": false})
    .format({"text": function(text,key){
      // use info in key object to updated the currentDepth and currentCoin the user is looking at
      if(key["vars"] != undefined){
        currentDepth = key["vars"]["depth"]["value"];
        if(key["data"] != undefined){
          // console.log(key["data"]["name"])
          currentCoin = key["data"]["name"];
        }
        // call redraw on mouse movements with the updated currentdepth and currentCoin
        redrawMouseMove();
        redrawMouseClick();
        redrawMouseOut();
        }
        if (tickerMap[text] != undefined) {
            var format =  d3.format(".3f");
            if(currency == "usd"){
              var newV =  tickerMap[text][0].toUpperCase()+"  "+parseFloat(tickerMap[text][period])+"%"+"\n "+"\n"+ "$"+format(tickerMap[text][6])
              return newV
            }
            if(currency == "bitcoin"){
              var newV =  tickerMap[text][0].toUpperCase()+"  "+parseFloat(tickerMap[text][period])+"%"+"\n "+"\n"+ "₿"+(tickerMap[text][7])
              return newV
            }    
            
        }
        else {
            return text.toUpperCase()
        }
      }
    })
    .labels({"align": "center", "valign": "top", "size": 100, "family": "Helvetica Neue", "spacing": 5, "weight":700 })
    .tooltip({"value": ["Name","market_cap_usd","24h_volume_usd","price_usd", "price_btc" ,"percent_change_1h","percent_change_24h","percent_change_7d","available_supply"], "background": "rgba(255,255,255,0.85)"})
    .draw()

//---------------------where functions go ---------------------------


// determines the color
function determineColor(input){
    var value = parseFloat(input);
    if (value >=0){
        return ["#518651", "Gainer "];
    }
    if(value <0){
        return ["#C84040", "Loser "];
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
  console.log(currentCoin);
  if (currentDepth == 2 ) {
    // if(currentCoin === "Bitcoin"){
        // document.getElementById("myFrame").src = "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=619&pref_coin_id=1505";
        document.getElementById("coin_name").innerHTML=currentCoin;
        // document.getElementById("coin_algo").innerHTML= algoMap[currentCoin][0] ;
        // document.getElementById("coin_algo_link").href = "http://www.cnn.com/";

        

        x.style.display = "block";
      // }
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
};

// ₿

var depthLevel=0;
      
var blockSizeBy="market_cap_usd"; 
      
var cat = "algo";
      
var period = 10;

var currency = "usd";
     

makeviz(blockSizeBy,depthLevel,cat,period,currency);
// makeviz("24h_volume_usd",1);


function myFunction(value) {
    // var x = document.createElement("BUTTON");
    // var t = document.createTextNode("Click me");
    // x.appendChild(t);
    // document.body.appendChild(x);



   

    if (value == 1){
      depthLevel=1;
      document.getElementById('in').style.backgroundColor="black";
      document.getElementById('in').style.color="white";
      document.getElementById('out').style.backgroundColor="white";
      document.getElementById('out').style.color="black";

    };
    if (value == 2){
      depthLevel=0;
      document.getElementById('out').style.backgroundColor="black";
      document.getElementById('out').style.color="white";
      document.getElementById('in').style.backgroundColor="white";
      document.getElementById('in').style.color="black";

    };
    if (value == 3){
      blockSizeBy="market_cap_usd";
      document.getElementById('market').style.backgroundColor="black";
      document.getElementById('market').style.color="white";
      document.getElementById('volume').style.backgroundColor="white";
      document.getElementById('volume').style.color="black";


    };
    if (value == 4){
      blockSizeBy="24h_volume_usd";
      document.getElementById('volume').style.backgroundColor="black";
      document.getElementById('volume').style.color="white";
      document.getElementById('market').style.backgroundColor="white";
      document.getElementById('market').style.color="black";

    };
    if (value == 5){
      cat = "algo";
      document.getElementById('algo').style.backgroundColor="black";
      document.getElementById('algo').style.color="white";
      document.getElementById('w/l').style.backgroundColor="white";
      document.getElementById('w/l').style.color="black";

    };
    if (value == 6){
      cat = "status";
      document.getElementById('w/l').style.backgroundColor="black";
      document.getElementById('w/l').style.color="white";
      document.getElementById('algo').style.backgroundColor="white";
      document.getElementById('algo').style.color="black";

    };
    if (value == 7){
      period = 8;
      document.getElementById('1h').style.backgroundColor="black";
      document.getElementById('1h').style.color="white";
      document.getElementById('7d').style.backgroundColor="white";
      document.getElementById('7d').style.color="black";
      document.getElementById('24h').style.backgroundColor="white";
      document.getElementById('24h').style.color="black";

    };
    if (value == 8){
      period = 10;
      document.getElementById('24h').style.backgroundColor="black";
      document.getElementById('24h').style.color="white";
      document.getElementById('1h').style.backgroundColor="white";
      document.getElementById('1h').style.color="black";
      document.getElementById('7d').style.backgroundColor="white";
      document.getElementById('7d').style.color="black";

    };
    if (value == 99){
      period = 9;
      document.getElementById('7d').style.backgroundColor="black";
      document.getElementById('7d').style.color="white";
      document.getElementById('24h').style.backgroundColor="white";
      document.getElementById('24h').style.color="black";
      document.getElementById('1h').style.backgroundColor="white";
      document.getElementById('1h').style.color="black";
      

    };
    
    if (value == 100){
      currency = "usd";
      document.getElementById('usd').style.backgroundColor="black";
      document.getElementById('usd').style.color="white";
      document.getElementById('bitcoin').style.backgroundColor="white";
      document.getElementById('bitcoin').style.color="black";
      

    
    };
    if (value == 101){
      currency = "bitcoin";
      document.getElementById('bitcoin').style.backgroundColor="black";
      document.getElementById('bitcoin').style.color="white";
      document.getElementById('usd').style.backgroundColor="white";
      document.getElementById('usd').style.color="black";
      

    };


    d3.selectAll("#viz").selectAll("div").remove();
    makeviz(blockSizeBy,depthLevel,cat,period,currency);


}



