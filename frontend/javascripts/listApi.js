class ListApi {
    static baseUrl = `http://localhost:3000/lists`

    static fetchLists() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            let list = List.createBy(listObj)
            listObj.players.forEach(playerObj => {
                Player.findOrCreateBy({...playerObj, list})
            })
            list.render()
        }))

        .catch(this.handleError)
    }

    static handleError(error) {
        flash().innerText = error
        flash().classList.remove("hide")
        setTimeout(() => {
            flash().innerText = ""
            flash().classList.add("hide")
        }, 5000)
    }

    // static handleSubmit(e) {
    //     e.preventDefault()
    //     const data = {
    //         name: e.target.querySelector("#player-name").value,
    //         score: e.target.querySelector("#player-score").value,
    //         list_id: e.target.querySelector("#list_id").value
    //     }
    //     fetch(ListApi.baseUrl, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(resp => resp.json())
    //     .then(json => {
    //         let play = new Player(json)
    //         document.getElementById("all-lists").innerHTML = ""
    //         play.render()
    //     })
    // }
}