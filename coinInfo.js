  var algoMap = {};
    algoMap["Bitcoin"]=[
        "SHA256d", //0
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=859&pref_coin_id=1505", //1
        "C++", //2
        "Satoshi Nakamoto", //3
        "9 January 2009",  //4
        "https://bitcoin.org/bitcoin.pdf", //5
        "https://bitcoin.org/en/", //6
        "https://twitter.com/bitcoin", //7
        "https://github.com/bitcoinjs/bitcoinjs-lib", //8
        "https://en.bitcoinwiki.org/wiki/bitcoin?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo", //9
        "Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Although other cryptocurrencies have come before, Bitcoin is the first decentralized cryptocurrency - Its reputation has spawned copies and evolution in the space.",
        "https://www.blockchain.com/explorer", //11
        "Coin", //12
        "https://www.reddit.com/r/bitcoin/", //13
        "Proof of Work", //14
        "Mineable", //15
        //16
        [
            "Bitcoin borrows from nearly three decades of research by academics, cypherpunk practitioners, and hobbyists who tried to create protocols for decentralized peer-to-peer payment networks with native currencies. Some of the most prominent projects that preceded Bitcoin include: Digicash, b-money, Hashcash, and e-gold. ",
            "Bitcoin is often associated with Austrian economic theories, anarcho-capitalist principles, and general libertarian politicking by virtue of the exclusive developer community to whom Nakamoto first released their white paper, certain protocol design characteristics, and the central tendency of political affiliations among early Bitcoin investors. A now-famous The Times headline included by Nakamoto in the genesis block’s coinbase signals Bitcoin’s wider potential utility, namely as a tool for anyone seeking alternatives to legacy financial services and sovereign monies. "
        ],
        //17
        [
            " 'Bitcoin' is a label used for a protocol and a currency. Bitcoin, the protocol, is a distributed, time-stamped ledger of unspent transaction output (UTXO) transfers stored in an append-only chain of 1MB data blocks. A network of mining and economic nodes maintains this blockchain by validating, propagating, and fighting to include mempool transactions in new blocks. Economic nodes (aka 'full nodes') receive transactions from other network participants, validate them against network consensus rules and double-spend vectors, and propagate the transactions to other full nodes that also validate and propagate. Valid transactions are sent to the network's mempool waiting for mining nodes to confirm them via inclusion in the next block.",
            "Mining nodes work to empty the mempool usually in a highest-to-lowest fee order by picking transactions to include in the next block and racing against each other to generate a hash less than the target number set by Bitcoin's difficulty adjustment algorithm. Proof of work (PoW) is the name for this cryptographic construct that incentives honesty among network participants and allows other mining nodes to costlessly verify the solved hash. Mining difficulty regularly adjusts to maintain Bitcoin's average ten-minute block schedule. Mining nodes add new blocks to whatever chain has the largest accumulated proof of work maintained by a network of economic nodes with downloaded copes if the same chain. Mining blocks is the only way to mint new bitcoins. ",
            "Bitcoin, the currency, is bits of data usable outside the limitations of the protocol a la scaling solutions like Lightning Network payment channels. A hard supply cap of 21 million bitcoins was introduced in Nakamoto's original source code and reinforced by Pieter Wuille's BIP42, which patched a small supply cap bug"
        ],
        //18
        [
            "On January 3, 2009, two months after publishing their white paper, Satoshi created the first bitcoins by mining the genesis block, but the block reward (50 BTC) is unspendable due to the original client's block database and transaction database configuration. Block rewards (initially 50 BTC + transaction fees) are claimed every 10 minutes, on average. Block rewards are halved every 210,000 blocks (approximately 4 years)."
        ],
        //19
        ["The rate at which new bitcoins are created is algorithmically cut in half roughly every 4 years (210,000 blocks). Bitcoin has gone through two halvings to date; in November 2012, and again in July 2016. Since blocks are generated every 10 minutes on average, and starting at 50 new bitcoins per block when the system was launched in 2009, this creates a very well-defined supply curve. The stability of Bitcoin's monetary policy a key differentiator versus other crypto assets."]

    ];



    algoMap["XRP"]=[
        "ECDSA", 
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=619&pref_coin_id=1505", 
        "C++",
        " Arthur Britto, David Schwartz, Ryan Fugger", 
        "2012",
        "https://ripple.com/files/ripple_consensus_whitepaper.pdf",
        "https://ripple.com/xrp/",
        "https://twitter.com/Ripple",
        "https://github.com/ripple/rippled",
        "https://en.bitcoinwiki.org/wiki/ripple?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "Ripple positions itself as a complement to, rather than a competitor with, Bitcoin - the site has a page dedicated to Ripple for bitcoiners. Ripple is a distributed network which means transactions occur immediately across the network - and as it is peer to peer - the network is resilient to systemic risk. Ripples aren't mined - unlike bitcoin and its peers - but each transaction destroys a small amount of XRP which adds a deflationary measure into the system. There are 100 billion XRP at present.",
        "https://xrpcharts.ripple.com/#/graph/",
        "Coin"
        ];
    
    algoMap["Ethereum"]=[
        "EtHash",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=145&pref_coin_id=1505",
        "Go, C++, Rust",
        "Vitalik Buterin, Gavin Wood, Joseph Lubin", 
        "July 30, 2015",
        "https://github.com/ethereum/wiki/wiki/White-Paper",
        "https://www.ethereum.org/",
        "https://twitter.com/ethereum",
        "https://github.com/ethereum/go-ethereum",
        "https://en.bitcoinwiki.org/wiki/ethereum?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third party interference. In the&nbsp;Ethereum protocol and blockchain there is a price for each operation. The general idea is, in order to have things transferred or executed by the network, you have to ",
        "https://etherscan.io/",
        "Coin"
        ];

    algoMap["Bitcoin Cash"]=[
        "SHA256d",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=157&pref_coin_id=1505",
        "C++",
        "Bitcoin hard fork",
        "1 August 2017 ",
        "https://bitcoin.org/bitcoin.pdf",
        "https://www.bitcoincash.org/",
        "https://twitter.com/BITCOlNCASH",
        "https://github.com/Bitcoin-ABC/bitcoin-abc",
        "https://en.wikipedia.org/wiki/Bitcoin_Cash",
        "Bitcoin Cash (BCH) is a hard forked version of the original Bitcoin. It is similar to bitcoin with regards to its protocol; Proof of Work SHA-256 hashing, 21,000,000 supply, same block times and reward system. However two main differences are the the blocksize limits, as of August 2017 Bitcoin has a 1MB blocksize limit whereas BCH proposes 8MB blocks. Also BCH will adjust the difficulty every 6 blocks as opposed to 2016 blocks as with Bitcoin.",
        "https://www.blocktrail.com/BCC",
        "Coin"
        ];

    algoMap["EOS"]=["DPoS",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=585&pref_coin_id=1505",
        "C++",
        "Daniel Larimer, Brendan Blumer",
        "January 31, 2018",
        "https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md",
        "https://eos.io/",
        "https://twitter.com/eos_io",
        "https://github.com/eosio",
        "https://en.bitcoinwiki.org/index.php?title=EOS&utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "EOS.IO is software that introduces a blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications (the “EOS.IO Software”). This is achieved through an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication and the scheduling of applications across multiple CPU cores and/or clusters. The resulting technology is a blockchain architecture that has the potential to scale to millions of transactions per second, eliminates user fees and allows for quick and easy deployment of decentralized applications. For more information, please read the ",
        "https://bloks.io/",
        "Coin"
        ];

    algoMap["IOST"] = ["Ethereum Token",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=426982&pref_coin_id=1505",
        "Go, C++",
        "Jimmy Zhong, Terrence Wang, Justin Li, Ray Xiao, Sa Wang, Kevin Tan",
        "June 2018",
        "https://whitepaperdatabase.com/ios-token-iost-whitepaper/",
        "https://iost.io/",
        "https://twitter.com/iostoken?lang=en",
        "https://github.com/iost-official/go-iost",
        "https://en.bitcoinwiki.org/wiki/IOStoken",
        "The Internet of Services (IOS) is an Ethereum-based platform that provides its users a way to exchange online services and digital goods. I also enables developers to deploy large scale dApps.",
        "https://etherscan.io/token/0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
        "Token"
        ];
  
    algoMap["Litecoin"]=["Scrypt",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=359&pref_coin_id=1505",
        "C++",
        "Charlie Lee",
        "7 October 2011",
        "https://bitcoin.org/bitcoin.pdf",
        "https://litecoin.com/",
        "https://twitter.com/litecoin",
        "https://github.com/litecoin-project/litecoin",
        "https://en.bitcoinwiki.org/wiki/litecoin?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "Litecoin LTC - provides faster transaction confirmations (2.5 minutes on average) and uses a memory-hard, scrypt-based mining proof-of-work algorithm to target the regular computers and GPUs most people already have - which are its main differentials to Bitcoin. The Litecoin network is scheduled to produce 84 million currency units with a halving in reward every four years just like bitcoin. The coin was created by a Google employee, Charles Lee. Litecoin is in second spot to Bitcoin and has spawned numerous clones - however it has a solid base of support and dedicated development team.",
        "https://chainz.cryptoid.info/ltc/",
        "Coin"
        ];

    algoMap["Tether"]=["Omni",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=637&pref_coin_id=1505" ,
        "C++",
        "J.R. Willett",
        "Oct 6, 2014",
        "https://tether.to/",
        "https://twitter.com/Tether_to",
        "https://en.bitcoinwiki.org/wiki/tether?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "https://tether.to/",
        "USDT is a cryptocurrency asset issued on the Bitcoin blockchain via the Omni Layer Protocol. Each USDT unit is backed by a U.S Dollar held in the reserves of the Tether Limited and can be redeemed through the Tether Platform. USDT can be transferred, stored, spent, just like bitcoins or any other cryptocurrency.",
        "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf",
        "https://www.omniexplorer.info/asset/31",
        "Token"
        ];

    algoMap["Monero"]=["CryptoNight",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=6&pref_coin_id=1505" ,
        "C++",
        "Nicolas van Saberhagen",
        "2014",
        "https://github.com/monero-project/research-lab/blob/master/whitepaper/whitepaper.pdf",
        "https://ww.getmonero.org/",
        "https://twitter.com/monero",
        "https://github.com/monero-project/monero",
        "https://en.bitcoinwiki.org/wiki/monero?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "Monero (XMR) is a cryptonight algorithm based alternative crypto currency. The coin is based on Proof of Work and has a block reward that varies smoothly. The difficulty retargets every block with a sixty second block target.",
        "https://moneroblocks.info/",
        "Coin"
        ];


    algoMap["TRON"]=["Other",
        "https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=8550&pref_coin_id=1505",
        "https://developers.tron.network/docs",
        "https://tron.network/index?lng=en",
        "https://twitter.com/tronfoundation",
        "https://github.com/tronprotocol/java-tron",
        "https://en.bitcoinwiki.org/wiki/tron?utm_source=coin360&utm_medium=referral&utm_campaign=coininfo",
        "each user to freely publish, store and own data, and in the decentralized autonomous form, decides the distribution, subscription and push of contents and enables content creators by releasing, circulating and dealing with digital assets, thus forming a decentralized content entertainment ecosystem.&nbsp;Tronix ix an ERC20 token based on the Ethereum blockchain, acting as the basic unit of account on the platform.",
        "https://tronscan.org/#/",
        "Coin"
        ];



    algoMap["IOTA"]=["DAG",
        ];
        
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