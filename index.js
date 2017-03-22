const app = "I don't do much.";

const toke = "625d0b6e3a5c134d1791a445a9da8b28b92691d8"
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
