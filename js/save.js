function save(url, body) {
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = () => {
        console.log(this.responseText);
    }

    return request.responseText
}

function saveGuest(event) {
    event.preventDefault();
    let url = "https://savedate20220330103346.scm.azurewebsites.net/api/SaveDate";

    let guests = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    let body = {
        "guests" : guests,
        "phone": phone
    };

    save(url, body);

    alert("PRESENÇA CONFIRMADA! Aguarde a mensagem dos noivos, caso não receba, preencha novamente os dados informados.");
    window.location.replace('index.html');
}