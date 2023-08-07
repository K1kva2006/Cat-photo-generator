const container = document.getElementById("container");
const generate = document.getElementById("generate")

let url =
    "https://api.thecatapi.com/v1/images/search?format=json&limit=1' --header 'Content-Type: application/json' --header 'x-api-key: example-api-key";
fetch(url)
    .then((reponse) => reponse.json())
    .then((getData) => {
        getData.forEach((element) => {
            const img = document.createElement("img");
            img.setAttribute("src", element.url);
            img.setAttribute("alt", "cat");
            container.appendChild(img);
            img.classList.add("img-container");
        });
    })
    .catch((err) => console.log(err));

generate.addEventListener("click", () => {
    window.location.reload();
})