
let defaultDuration = 21600000;
function setAuthToken(authToken, duration = defaultDuration) {
    if(!localStorage.getItem(`${authToken}`)){
        localStorage.setItem("Auth", authToken);
    }
    else{
        console.log("already set with given authentication token: ", authToken);
        return;
    }
    console.log(localStorage.getItem(`${authToken}`));
}

setAuthToken({user:"user1243", time: 2000000000});