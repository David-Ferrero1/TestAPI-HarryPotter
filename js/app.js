const apiURL = "https://harry-potter-api-en.onrender.com/db"

fetch(apiURL).then((res) => res.json()).then((data) => {
    //console.log(data);
    data.characters.forEach(element => 
        document.getElementById("main").innerHTML +=
            '<div id="character">'+
            '<img src= "' + element.image + '" width="150px" height="200px">' +
            '<h2 id="name">' + element.character + '</h2>' +
            '<div id="real-name">(' + element.interpretedBy + ')</div>' +
            '<div id="house">' + element.hogwartsHouse + '</div>' +
            '</div>'
    );
})
// const apiURL = "https://hp-api.onrender.com/api/characters"

// fetch(apiURL).then((res) => res.json()).then((data) => {
//     //console.log(data);
//     data.forEach(element => 
//         document.getElementById("main").innerHTML +=
//             '<div id="character">'+
//             '<img src= "' + element.image + '" width="150px" height="200px">' +
//             '<div id="name">' + element.name + '</div>' +
//             '<div id="house">' + element.house + '</div>' +
//             '<div id="house">' + element.house + '</div>' +
//             '</div>'
//     );
// })