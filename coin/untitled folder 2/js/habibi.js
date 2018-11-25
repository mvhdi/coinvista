// document.addEventListener('DOMContentLoaded', function() {
//   // Do after the document fully loaded
// });


var currencyInfo;

// Add commas to long numbers
function addCommas(num) {
    return parseFloat(num, "10").toLocaleString();
}


// Hide loading animation
function hideLoading() {
    var loadingIcon = document.querySelector('.loading_icon');
    loadingIcon.style.display = "none";
}



// Add currency block
function addCurrency(rank, symbol, currencyName, price, changeInPrice, marketCap, volume24h, circulatingSupply) {
    // Creating all HTML elements
    var mainContainerDiv = document.querySelector('.main_container');

    var currencyPlaceholderDiv = document.createElement("div");
    var currencyContainerDiv = document.createElement("div"); 

    var currencyNameDiv = document.createElement("div");
    var priceDiv = document.createElement("div");
    var changeInPriceDiv = document.createElement("div");

    var currencyDetailsListUl = document.createElement("ul");
    var marketCapLi = document.createElement("li");
    var volume24hLi = document.createElement("li");
    var circulatingSupplyLi = document.createElement("li"); 


    // Setting Attribute Values
    currencyPlaceholderDiv.setAttribute('class', 'currency_placeholder');
    currencyContainerDiv.setAttribute('class', 'currency_container');
    currencyContainerDiv.setAttribute('data-currency-rank', '#' + rank);
    currencyNameDiv.setAttribute('class', 'currency_name');
    currencyNameDiv.setAttribute('data-coin-symbol', symbol);
    priceDiv.setAttribute('class', 'currecny_price');
    if (changeInPrice <= 0) {
        changeInPriceDiv.setAttribute('class', 'currency_change_in_price down_change');
    } else {
        changeInPriceDiv.setAttribute('class', 'currency_change_in_price up_change');
    }
    currencyDetailsListUl.setAttribute('class', 'currency_details_list');
    marketCapLi.setAttribute('data-title', 'Market Cap');
    volume24hLi.setAttribute('data-title', 'Volume (24h)');
    circulatingSupplyLi.setAttribute('data-title', 'Circulating Supply');


    // Adding Values from the API
    currencyNameDiv.innerHTML = currencyName;
    priceDiv.innerHTML = "$" + addCommas(price);
    changeInPriceDiv.innerHTML = changeInPrice + "%";
    marketCapLi.innerHTML = addCommas(marketCap);
    volume24hLi.innerHTML = addCommas(volume24h);
    circulatingSupplyLi.innerHTML = addCommas(circulatingSupply);



    // Adding the elements to the DOM
    currencyDetailsListUl.appendChild(marketCapLi);
    currencyDetailsListUl.appendChild(volume24hLi);
    currencyDetailsListUl.appendChild(circulatingSupplyLi);

    currencyContainerDiv.appendChild(currencyNameDiv);
    currencyContainerDiv.appendChild(priceDiv);
    currencyContainerDiv.appendChild(changeInPriceDiv);
    currencyContainerDiv.appendChild(currencyDetailsListUl);

    currencyPlaceholderDiv.appendChild(currencyContainerDiv);

    mainContainerDiv.appendChild(currencyPlaceholderDiv);
}

function loadCoins() {
    for (let i = 0; i < currencyInfo.length; i++) {
        addCurrency(
            currencyInfo[i].rank,
            currencyInfo[i].symbol,
            currencyInfo[i].name,
            currencyInfo[i].price_usd,
            currencyInfo[i].percent_change_24h,
            currencyInfo[i].market_cap_usd,
            currencyInfo[i]["24h_volume_usd"],
            currencyInfo[i].available_supply
        );
    }
}




// Getting the coins from the API
var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    currencyInfo = JSON.parse(this.response);
    loadCoins();
    hideLoading();
  } else {
    // We reached our target server, but it returned an error
    console.log("The server doesn't love us! 💔");
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log('Connection error! 🖥');
};

request.send();