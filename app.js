const container = document.getElementById("container");
const generate = document.getElementById("generate");
generate.style.display = "none";

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
            container.insertBefore(img, generate);
        });
    })
    .catch((err) => console.log(err));


setTimeout(() => {
    generate.style.display = "block"
}, 1500)
generate.addEventListener("click", () => {
    window.location.reload();
});
