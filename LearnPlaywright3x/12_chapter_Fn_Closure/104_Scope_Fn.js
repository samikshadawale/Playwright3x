let env = "Staging"; //global scope

function steConfig() {
    let timeout = 3000; //local scope
    console.log(env); //can access globaly
    console.log(timeout); // can access localy

}

steConfig();
console.log(env);
console.log(timeout);//error timeout is not defined

let g_x = 10;

function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);  // ✅ inner can access outer's variables
    }


    inner();
    console.log(y); // ❌ outer cannot access inner's variables

}