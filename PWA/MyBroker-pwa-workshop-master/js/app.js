(function () {
    'use strict';

    const db = new PouchDB("my_database");
    let stockNames = [];
    loadStockNames();
    
    function loadStockNames() {
        db.get("stocks").catch(error => {
            if(error.name === "not_found"){
                return {
                    _id: "stocks",
                    stockNames: ["dax"]
                }
            }
        }).then(data => {
            stockNames = data.stockNames;
            showStocks();
        });
    }

    function saveStockNames() {
        db.get("stocks").catch(error => {
            if(error.name === "not_found"){
                return {
                    _id: "stocks"
                }
            }
        }).then(data => {
            data.stockNames = stockNames;
            db.put(data);
        });
    }
    
    document.querySelector('.nav-wrapper.container').addEventListener('click', (eventArgs) => {
        if (eventArgs.srcElement.innerHTML === 'loop' ||
            eventArgs.srcElement.innerText === 'loopAktualisieren') {
            showStocks();
        } else if (eventArgs.srcElement.innerHTML === 'add' ||
            eventArgs.srcElement.innerText === 'addHinzufügen') {
            document.getElementById('newStock').removeAttribute('hidden');
            document.getElementById('stocks').setAttribute('hidden', 'true');
        }
    });

    document.getElementById('addStock').addEventListener('click', () => {
        var stockName = document.getElementById('name').value;
        if (stockName) {
            stockNames.push(stockName);
            saveStockNames();

            showStocks();
        }
        document.getElementById('name').value = '';
        document.getElementById('newStock').setAttribute('hidden', 'true');
        document.getElementById('stocks').removeAttribute('hidden');
    });

    function showStocks() {
        loadStocksFromWebService().then(stocks => {
            renderStocks(stocks);
        })
    }

    async function loadStocksFromWebService() {
        //const stocks = loadStockNames();
        const response = await fetch("https://stockplaceholder.herokuapp.com/api/stocks/" + stockNames.join('/'));
        return response.json();
    }

    function renderStocks(stocks) {
        const cardTemplate = document.getElementById('cardTemplate');
        const fragment = document.createDocumentFragment();

        stocks.forEach((stock) => {
            const card = cardTemplate.cloneNode(true);
            card.querySelector('.card-title').textContent = stock.name + ' (' + stock.symbol + ')';
            card.querySelector('#DateTime').textContent = stock.lastTradeDate + ' - ' + stock.lastTradeTime;
            card.querySelector('#LastTradePrice').textContent = stock.lastTradePriceOnly + ' ' + stock.currency;
            card.querySelector('#Change').textContent = stock.change;
            card.querySelector('#Change').className += stock.change.indexOf('+') > -1 ? ' green' : ' red';
            card.querySelector('#ChangeinPercent').textContent = stock.changeinPercent;
            card.removeAttribute('id');
            card.removeAttribute('hidden');
            fragment.appendChild(card);
        });

        document.getElementById('stocks').innerHTML = '';
        document.getElementById('stocks').appendChild(fragment);
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../sw.js').then(() =>{
            console.log("Serviceworker registered");
        }).catch(error => console.log("oh no :(", error));
      }
    //showStocks();
}());
