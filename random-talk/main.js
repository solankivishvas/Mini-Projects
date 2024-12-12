let input = document.getElementById('input');
let translate = document.getElementById('btn-translate');
let output = document.getElementById('output');

let serverUrl = "https://api.funtranslations.com/translate/minion.json?";

// let serverUrl = "https://api.funtranslations.com/translate/shakespeare.json?";

function getTranslateUrl(text) {
    return serverUrl + "text=" + encodeURIComponent(text);
}

translate.addEventListener("click", function randTalks() {
    let inputText = input.value;

    fetch(getTranslateUrl(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(error => {
            console.error("Error:", error);
            output.innerText = "Something went wrong!";
        });
});

