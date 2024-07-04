let title = document.querySelector(".title");
let channel = document.querySelector(".channel");
let views = document.querySelector(".views");
let days = document.querySelector(".days");

let myTitle = "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3";
let mychannel = "CodeWithMosh";
let myViews = 90;
let myDays = 765;

function calcViews(views){
    if (views >= 1000000000) {
      myViews = Math.floor(views / 1000000000);
      myViews = `${myViews}B views`;
    } else if (views >= 1000000) {
      myViews = Math.floor(views / 1000000);
      myViews = `${myViews}M views`;
    }
    else if (views >= 1000) {
      myViews = Math.floor(views / 1000);
      myViews = `${myViews}K views`;
    }
    else if(views < 0){
        myViews = "0 views";
    }
    else{
        myViews = `${myViews} views`
    }
    return myViews;
}

function calcdays(days){
    if (days >= 365) {
      myDays = Math.floor(days / 365);
      myDays = `${myDays} years`;
    } else if (days >= 30) {
      myDays = Math.floor(days / 30);
      myDays = `${myDays} months`;
    } else if (days <= 0) {
      myDays = "recently uploaded";
    } else {
      myDays = `${myDays} days`;
    }
    return myDays;
}

function set(t, c, v, d){
    title.textContent = t;
    channel.textContent = c;
    views.textContent = calcViews(v);
    days.textContent = calcdays(d);
}

set(myTitle, mychannel, myViews, myDays)