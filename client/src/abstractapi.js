function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

var url = "https://phonevalidation.abstractapi.com/v1/?api_key=c91304cb1dad417aafcc5d1a41961d01&phone=14152007986"

httpGetAsync(url)

