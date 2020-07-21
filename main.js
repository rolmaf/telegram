let token = "1349440500:AAEP9oD8PdO9l6gAqe7Rln7ZoIO3W9Ha76k";


document.querySelector(".send-request__btn").onclick = function () {
    let text = document.querySelector(".message__input").value;
    let chatId = document.querySelector(".group-id__input").value;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert("Невалидное id группы/сообщение/бот не добавлен в группу")
        }
         
    }
    console.log(url);
};

document.querySelector("#selectBot").addEventListener("change", (event) => {
    selectValue = event.target.value;
    switch (selectValue) {
        case "Edvard Bot":
            token = "1349440500:AAEP9oD8PdO9l6gAqe7Rln7ZoIO3W9Ha76k";
            break;
        case "Смирнов Антон":
            token = "1030803230:AAG_QUcA_UQeKylP_Ei7L-r-bPtwaYlvrNY";
            break;
        case "Инна Рассказова":
            token = "1272928329:AAHWqJTKpvzhWcHihGB8Gv2T2FQWG19RJrI";
            break;
        case "Парень из Ростова":
            token = "1236964977:AAEKIucFpxbVsySIZi0RO8pTJQKbW4R901g";
            break;
        case "Илон Маск":
            token = "1290565946:AAE2cujh7z_8UsFHBnC1NPIwtwuIeaHdTsI";
            break;
        case "Вебчик":
            token = "1238246345:AAFgNqbcDfqa75ijtx2quE_urgY6rvRpmSE";
            break;
    }
});

document.querySelector(".getUpdates__btn").addEventListener("click", () => {
    let xhrUpd = new XMLHttpRequest();
    let urlUp = `https://api.telegram.org/bot${token}/getUpdates`;
    xhrUpd.open("GET", urlUp, true);
    xhrUpd.send();
    xhrUpd.onload = () => {
        if (xhrUpd.status == 200) {
            let res = JSON.parse(xhrUpd.response)
            console.log(res);
        } else {
            alert("Бот не был добавлен ни во одну группу");
        }
    };
});

document.querySelector(".getId__btn").addEventListener("click", () => {
    let xhrId = new XMLHttpRequest();
    let urlId = `https://api.telegram.org/bot${token}/getUpdates`;
    xhrId.open("GET", urlId, true);
    xhrId.send();
    xhrId.onload = () => {
        if (xhrId.status == 200) {
            let res = JSON.parse(xhrId.response);
            let { result } = res;
            if (result.length != 0) {
                alert(`ID группы: ${result[result.length - 1].message.chat.id} Название группы: ${result[result.length - 1].message.chat.title}`);
                console.log(result[result.length - 1]);
            } else {
                alert("Бот не состоит ни в одной группе");
            }

        } else {
            alert("Бот не был добавлен ни во одну группу");
        }
    };
});