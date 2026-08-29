let browser = ['chrome', 'firefox','opera','safari'];
console.log(browser.length);

browser.pop();
console.log(browser);

let remove = browser.shift();
console.log(browser);

for (let i=0; i<browser.length; i++){
    console.log(browser[i]);
    if(browser[i] ==="opera"){
        console.log("opera dosent support automation")
    }
}