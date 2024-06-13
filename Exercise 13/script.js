function createCard(title, cName, views, monthsOld, durtion, thumbnail){
    let cont = document.querySelector(".container");
    let card = document.querySelector(".card");
    cont.append(card);
}

function setTitle(title){
    document.querySelector(".title").textContent = title;
}

function setCName(cName){
    document.querySelector(".info span:nth-child(2)").textContent = cName;
}

function setViews(views){
    document.querySelector(".info span:nth-child(4)").textContent = views;
}

function setMonthsOld(monthsOld){
    document.querySelector(".info span:nth-child(6)").textContent = monthsOld;
}

function setThumbnail(url){
    document.querySelector(".image img").setAttribute("src", url);
}