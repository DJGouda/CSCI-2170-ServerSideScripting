const http = require('http');
const crypto = require('crypto');

http.createServer((req, res)=>{
    // const date = new Date();
    // date.setDate(date.getDate()-7); //deletes the cookie
    // // date.setDate(date.getDate()+7); //sets the cookie

    // // console.log(date.toUTCString());
    // //retrieve a cookie
    // if(req.headers.cookie){
    //     console.log(req.headers.cookie);
    // }

    // res.writeHead(200, {
    //     "Content-Type":"text/plain",
    //     "Set-Cookie":[
    //         `cookieName=cookieValue; path=/; expires=${date.toUTCString()}`,
    //         `thing2=value2; path=/; expires=${date.toUTCString()}`
    //     ]
    // });
    // res.end("Hello");

    console.log(crypto.randomBytes(16).toString("hex"));

    let password = "S3cure pa$$wrd";
    let salt = crypto.randomBytes(16).toString("hex");
    let hash = crypto.hash("sha256", password+salt);
    
    res.end(hash);
})
.listen(8000, "localhost", () => {
    console.log("Listening on 8000");
})