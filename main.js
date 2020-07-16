// const TOKEN = "1349440500:AAEP9oD8PdO9l6gAqe7Rln7ZoIO3W9Ha76k";


document.querySelector(".send-request__btn").onclick = function() {
    let text = document.querySelector(".message__input").value;
    let token = document.querySelector(".bot-token__input").value;
    let chatId = document.querySelector(".group-id__input").value;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert("Невалидный токен/id группы/сообщение/бот не добавлен в группу")
        }
        console.log(xhr);
    }
    console.log(url);
}
