const apiURL = "https://harry-potter-api-en.onrender.com/db"

fetch(apiURL).then((res) => res.json()).then((data) => {
    console.log(data);
})