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
    document.querySelector(".info span:nth-child(6)").textContent = `${monthsOld} months ago`;
}

function setThumbnail(url){
    document.querySelector(".image img").setAttribute("src", url);
}

function setDuration(duration){
    document.querySelector(".duration").textContent=duration;
}

function calcViews(views){
    if (views < 1000) {
      return views;
    } else if (views < 1000000) {
      views = views / 1000;
      return `${views}K`;
    } else if (views > 1000000) {
      views = views / 1000000;
      return `${views}M`;
    }
    else{
        return views;
    }
}
function setter(){
    let title = prompt("Enter title of a video: ");
    let cName = prompt("Enter Channel Name: ");
    let views = calcViews(Number(prompt("Enter no. of Views: ")));
    let monthsOld = Number(prompt("Enter how many months old: "));
    let duration = prompt("Enter video duration: ");
    setTitle(title);
    setCName(cName);
    setViews(views);
    setMonthsOld(monthsOld);
    setDuration(duration);

}

setter();