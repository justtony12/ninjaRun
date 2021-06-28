document.addEventListener("DOMContentLoaded", () => {
    ListApi.fetchLists()
})

const flash = () => document.querySelector("#flash")

function yourList(){
    const submissionForm = document.createElement("form");

    submissionForm.id = "scoreForm"
    
    let level;
    let listId;

    switch(true){
        case(totalSeconds < 60):
            level = "Noob"
            listId = 1
            break
        case(totalSeconds < 300):
            level = "Wolf"
            listId = 2
            break
        case(totalSeconds < 600):
            level = "Tiger"
            listId = 3
            break
        case(totalSeconds < 1800):
            level = "Demon"
            listId = 4
            break
        case(totalSeconds < 3600):
            level = "Dragon"
            listId = 5
            break
        case(totalSeconds >= 3600):
            level = "God"
            listId = 6
            break
            
    }
   
    submissionForm.innerHTML = `
        <h3>You're a ${level}</h3>
        <label for="player-name">Name:</label>
        <input type="text" name="name" id="player-name"><br>
        <input type="hidden" name="score" id="player-score" value="${totalSeconds}">
        <input type="hidden" name="list" id="list_id" value="${listId}">
        <input type="submit" value="Submit" onclick="restartGame()">
    `
    submissionForm.addEventListener("submit", PlayerApi.handleSubmit)
    document.getElementById("all-lists").append(submissionForm)
}

const listSection = () => document.querySelector('#list-section');

function toggleBoard() {
    let listSection = document.querySelector('#list-section')

    if (listSection.style.display === "none") {
        listSection.style.display = "block";
    } else {
        listSection.style.display = "none";
    }
}