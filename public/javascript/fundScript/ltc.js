// -------------------------------------- Litecoin Price ticker --------------------------------------

let ws = new WebSocket('wss://stream.binance.com:9443/ws/ltceur@trade');
let stockPriceElement = document.getElementById('ltc-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? '#716b94' : price > lastPrice ? '#716b94':
    lastPrice = price;
}