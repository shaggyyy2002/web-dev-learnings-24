# Week 2

## Week 2.1




## Week 2.2 Express, NodeJS (Backend)

1. `ECMAScript:` Scripting language is a specification on which Javascript is based. So anyone who wants to build a compiler for JS you should support all this.
2. `Javascript:` It is a scripting language that confronts the ECMAScript specification. Used implementation of ECMAScript. To compile the js code onto browser some smart people created some engines eg. v8 by google. Spidermonkey by Firefox.
3. `Node.js:` NodeJs is a backend language. Some smart people relaised that to learn frontend we need to use JS so why not take the v8 engine from google and add some backend code to it. eg. HTTPS, Readfile etc and other things what JAVA & GoLang provided. and all that made a new runtime (something that compile js & run the js code) Node.js.   
4. `Bun:` Bun is competitor and decided to do what NodeJs do but better and faster written in Zig and is opensource.

### What can you do with Node.js?

1. Create CLI's
2. Create a vide player
3. Create a game
4. Create an `HTTP server`

#### What is an HTTP Server?
- HTTP: Hyper text transfer Protocol
  - Protocol: A protocol that is defined for machines to communicate
  - Specifically for websites, its the most common way for your website's `frontend` to talk to its `backend`.
- Frontend :  The website you visit the first thing you see the buttons, text space, texts, chatbox are all part of frontends. eg. ChatGPT frontend where you can type and send messagess.
- Backend : The messages you sent from the frontend will reach to a server (datacenter) where the ML model is running and will take your request and give you something back (prob an answer). The process where it happened is the backend. 
The place where the request goes and gives us some result back is the backend. 
- so an HTTP is a protocol which helps you in sending the signals from frontend (browser) to the desired server is done by HTTP protocols. 
- The thing that exposes (allows you to form a connection) the ML model to the world is the HTTP Server

### HTTP Protocol 

#### HTTP Client Side

eg. Link: https://chat.openai.com/backend-api/conversation 

- `Protocol (HTTP, HTTPs):` They have to have some URL. eg. (https:) Protocol 
- `Address (URL/IP/PORT):` eg. //(chat.openai.com) URL
- `Route:` eg. (/backend-api/conversation) Route
- `Headers, Body, Query, Params:` Some auth confirmation that who   is logged in. knnown by `Cookie` (some more headers also availables) In body the question that we asked chatGPT (what is 2+2?)
- `Method:` POST, GET, DELETE, PUT

In a high level this is what we are sending to the backend server

#### HTTP Server Side

- `Response Headers:` When you sign in you get back the cookie from the server and you can store it. Not used very often 
- `Response Body:` The ans you get back. (2+2=4)
- `Status Codes:` 200 (OK), 404(Error), 500(Internal Server error), 403 (Auth error) 

#### Jargon & Interview Questions

`What is the sequence of event that happens when we type google.com?`
- Browser parses the URL (where we are sending the data).
- Does a DNS Lookup (converts the google.com to an IP).
- Establishes a connection the IP (does Handshake)
- Gives you the body

Similarly there are many libraries that let you create HTTP Servers. The most famous one is express. We are going to use Express & NodeJs to create a HTTP Server


## Week 2.3 & Week 2.4 (Bash Terminal)

1. `pwd` : present working directory 
2. `cd` : change dir
3. `ls` : list
4. `mkdir` : make directory
5. `touch` : make a file
6. `cat` : show the content of the file and many other func
7. `vi` : start a visual editor
8. `mv` : move the file or folder
9. `cp` :  copy a file or folder
10. `nvm` : uses to set the node version

## Week 2.5 (Express and HTTP with real world examples Postman)

Taking an example of doctor. There's a doctor who studied went to college and got his degree but to share it to the world he either has to open his own clinic or have to work at an hospital. In the same way you have written your code but for people to acess the functionality of your code (eg calculator) or the knowledge of the doctor you will have to visit to the hospital or in our case import Express to write an HTTP server.

So express people have wrtoe some code by using which you can expose your code to the internet.

[Lecture Example HTTP code](./Lectures/HTTP-Server/http.js)


```js
const express = require("express")

// creating the clinic
const app  = express();
console.log("running on port 3000")

// doctor taking a clinic
app.listen(3000)
```

This will written `Cannot GET /` as a default from express since we have not set 

```js
// req, res ==> request to take (inputs, headers) , responds to send (status code)
app.get("/", function(res, req){
    
})
```

this is a callback function and will send the function anytime someone hits the endpoint  ie. (`/`)

#### Request Methods

1. `GET`: to get something from OR Going for a consultation to get a check up
2. `POST`: Posting something on linkedin OR Going to get a new kidney inserted
3. `PUT`: Adding something to the request OR Going to get a kidney replaced
4. `DELETE`: Removing something OR Going to get a kidney removed

#### Status Codes

1. `200` : Code working OR Everything went fine.
2. `404` : Backend Not working OR Doctor is not present
3. `500` : somethign went wrong when doing OR Mid Surgery light went away
4. `411` : Inputs were incorrect OR wrong person came to surgery
5. `403` : Access Denied OR Not allowed in the hospital

#### Class Assignment

[InMemory Hospital](./Lectures/Hospital/)