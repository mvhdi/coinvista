algo = [
    {"name": "Bitcoin", "algo": "SHA256d", "symbol": tickerMap["Bitcoin"][0], "rank" : (tickerMap["Bitcoin"][1]), "market_cap_usd": parseFloat(tickerMap["Bitcoin"][2]), "24h_volume_usd": (tickerMap["Bitcoin"][3]), "max_supply": (tickerMap["Bitcoin"][4]), "available_supply": (tickerMap["Bitcoin"][5]), "price_usd": (tickerMap["Bitcoin"][6]), "price_btc": (tickerMap["Bitcoin"][7]), "percent_change_1h": (tickerMap["Bitcoin"][8]), "percent_change_7d": (tickerMap["Bitcoin"][9]), "percent_change_24h": (tickerMap["Bitcoin"][10]), "color" : determineColor(tickerMap["Bitcoin"][10])   },

    {"name": "XRP", "algo": "ECDSA", "symbol": tickerMap["XRP"][0], "rank" : (tickerMap["XRP"][1]), "market_cap_usd": parseFloat(tickerMap["XRP"][2]), "24h_volume_usd": (tickerMap["XRP"][3]), "max_supply": (tickerMap["XRP"][4]), "available_supply": (tickerMap["XRP"][5]), "price_usd": (tickerMap["XRP"][6]), "price_btc": (tickerMap["XRP"][7]), "percent_change_1h": (tickerMap["XRP"][8]), "percent_change_7d": (tickerMap["XRP"][9]), "percent_change_24h": (tickerMap["XRP"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    },
    
    {"name": "Ethereum", "algo": "Ethereum", "symbol": tickerMap["Ethereum"][0], "rank" : (tickerMap["Ethereum"][1]), "market_cap_usd": parseFloat(tickerMap["Ethereum"][2]), "24h_volume_usd": (tickerMap["Ethereum"][3]), "max_supply": (tickerMap["Ethereum"][4]), "available_supply": (tickerMap["Ethereum"][5]), "price_usd": (tickerMap["Ethereum"][6]), "price_btc": (tickerMap["Ethereum"][7]), "percent_change_1h": (tickerMap["Ethereum"][8]), "percent_change_7d": (tickerMap["Ethereum"][9]), "percent_change_24h": (tickerMap["Ethereum"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    },
    
    {"name": "Bitcoin Cash", "algo": "SHA256d", "symbol": tickerMap["Bitcoin Cash"][0], "rank" : (tickerMap["Bitcoin Cash"][1]), "market_cap_usd": parseFloat(tickerMap["Bitcoin Cash"][2]), "24h_volume_usd": (tickerMap["Bitcoin Cash"][3]), "max_supply": (tickerMap["Bitcoin Cash"][4]), "available_supply": (tickerMap["Bitcoin Cash"][5]), "price_usd": (tickerMap["Bitcoin Cash"][6]), "price_btc": (tickerMap["Bitcoin Cash"][7]), "percent_change_1h": (tickerMap["Bitcoin Cash"][8]), "percent_change_7d": (tickerMap["Bitcoin Cash"][9]), "percent_change_24h": (tickerMap["Bitcoin Cash"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    },
    
    {"name": "EOS", "algo": "DPoS", "symbol": tickerMap["EOS"][0], "rank" : (tickerMap["EOS"][1]), "market_cap_usd": parseFloat(tickerMap["EOS"][2]), "24h_volume_usd": (tickerMap["EOS"][3]), "max_supply": (tickerMap["EOS"][4]), "available_supply": (tickerMap["EOS"][5]), "price_usd": (tickerMap["EOS"][6]), "price_btc": (tickerMap["EOS"][7]), "percent_change_1h": (tickerMap["EOS"][8]), "percent_change_7d": (tickerMap["EOS"][9]), "percent_change_24h": (tickerMap["EOS"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    }
    
    {"name": "Tether", "algo": "Omni", "symbol": tickerMap["Tether"][0], "rank" : (tickerMap["Tether"][1]), "market_cap_usd": parseFloat(tickerMap["Tether"][2]), "24h_volume_usd": (tickerMap["Tether"][3]), "max_supply": (tickerMap["Tether"][4]), "available_supply": (tickerMap["Tether"][5]), "price_usd": (tickerMap["Tether"][6]), "price_btc": (tickerMap["Tether"][7]), "percent_change_1h": (tickerMap["Tether"][8]), "percent_change_7d": (tickerMap["Tether"][9]), "percent_change_24h": (tickerMap["Tether"][10]),"color" : determineColor(tickerMap["Bitcoin"][10])    }

    {"name": "Monero", "algo": "CryptoNight"},
    
    {"name": "TRON", "algo": "Other"},
    {"name": "MIOTA", "algo": "DAG"},


    {"name": "Dash", "algo": "X11"},
    {"name": "Binance Coin", "algo": "Ethereum"},
    {"name": "NEM", "algo": "Apostille"},
    {"name": "Ethereum Classic", "algo": "EtHash"},
    {"name": "NEO", "algo": "dBFT"},
    {"name": "Zcash", "algo": "Equihash"},
    {"name": "Tezos", "algo": "PoS"},
    {"name": "Bitcoin Gold", "algo": "Equihash"},
    {"name": "Ontology", "algo": "Other"},
    {"name": "VeChain", "algo": "Other"},

    {"name": "Dogecoin", "algo": "Scrypt"},
    {"name": "Maker", "algo": "Ethereum"},
    {"name": "OmiseGO", "algo": "Ethereum"},
    {"name": "0x", "algo": "Ethereum"},
    {"name": "Qtum", "algo": "PoS"},
    {"name": "Decred", "algo": "Blake 256"},
    {"name": "Basic Attention Token", "algo": "Ethereum"},
    {"name": "TrueUSD", "algo": "Ethereum"},
    {"name": "USD Coin", "algo": "Ethereum"},
    {"name": "Lisk", "algo": "DPoS"},

    {"name": "Bytecoin", "algo": "CryptoNight"},
    {"name": "Bitcoin Diamond", "algo": "X13"},
    {"name": "Paxos Standard Token", "algo": "Ethereum"},
    {"name": "Nano", "algo": "DPoS"},
    {"name": "Aurora", "algo": "Ethereum"},
    {"name": "Aeternity", "algo": "Ethereum"},
    {"name": "BitShares", "algo": "DPoS"},
    {"name": "Zilliqa", "algo": "Ethereum"},
    {"name": "ICON", "algo": "Other"},
    {"name": "DigiByte", "algo": "Multiple"},

    {"name": "siacoin", "algo": "Mixed"},
    {"name": "Steem", "algo": "DPoS"},
    {"name": "Chainlink", "algo": "Ethereum"},
    {"name": "Pundi X", "algo": "Ethereum"},
    {"name": "Waves", "algo": "PoS"},
    {"name": "Bytom", "algo": "Scrypt"},
    {"name": "Augur", "algo": "Ethereum"},
    {"name": "Verge", "algo": "Scrypt"},
    {"name": "Golem", "algo": "Ethereum"},
    {"name": "Populous", "algo": "Ethereum"},

    {"name": "MaidSafeCoin", "algo": "Omni"},
    {"name": "Stratis", "algo": "X13"},
    {"name": "Electroneum", "algo": "CryptoNight"},
    {"name": "Holo", "algo": "Ethereum"},
    {"name": "Status", "algo": "Ethereum"},
    {"name": "QASH", "algo": "Ethereum"},
    {"name": "Factom", "algo": "Mixed"},
    {"name": "Komodo", "algo": "Equihash"},
    {"name": "Cryptonex", "algo": "Scrypt"},
    {"name": "Revain", "algo": "Ethereum"},

    {"name": "IOST", "algo": "Ethereum"},
    {"name": "Ardor", "algo": "PoS"},
    {"name": "Decentraland", "algo": "Ethereum"},
    {"name": "Metaverse ETP", "algo": "EtHash"},
    {"name": "", "algo": ""},
    {"name": "", "algo": ""},
    {"name": "", "algo": ""},
    {"name": "", "algo": ""},
    {"name": "", "algo": ""},
    {"name": "", "algo": ""},
  ];