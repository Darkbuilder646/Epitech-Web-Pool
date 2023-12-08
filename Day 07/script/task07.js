function deleteCookie(cookieToDelete) 
{
    let date = new Date;
    date.setTime(date.getTime()-1);
    let expiration = date.toUTCString();
    document.cookie = cookieToDelete + "=; expires=" + expiration + "; path=/";
}

function creatCookies()
{
    if(!checkCookies("acceptsCookies"))
    {
        let date = new Date();
        date.setTime(date.getTime() + (1*26*60*60*1000));
        let expiration = date.toUTCString();
        let valueCookie = true;
        document.cookie = "acceptsCookies=" + valueCookie +"; expires=" + expiration + "; path=/";
    }
    console.log(document.cookie);
    messageBox.textContent = "";
} 

function checkCookies(cookieToCheck)
{
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if(cookie.indexOf(cookieToCheck + "=" === 0)){
            return true;
        }
    }
    return false;
}
const messageBox = document.querySelector("footer > div");
var textContentBox = messageBox.textContent;


const cookiesLink = document.querySelector("a");
cookiesLink.addEventListener('click', () => {
    creatCookies();
    
});

messageBox.addEventListener('click', () => {
    if(messageBox.textContent == "")
    {
        messageBox.textContent = textContentBox;
    }
});

