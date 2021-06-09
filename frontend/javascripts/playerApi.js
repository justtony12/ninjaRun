class PlayerApi {
    static baseUrl = `http://localhost:3000/players`

    static fetchPlayers() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(playerObj => {
            Player.findOrCreateBy(playerObj)
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

    static handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: playerName().value,
            score: playerScore().value,
            list_id: playerSelectList().value
        }
        fetch(PlayerApi.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            // let play = new Player(json)
            noobList().reset()
            wolfList().reset()
            tigerList().reset()
            demonList().reset()
            dragonList().reset()
            godList().reset()
            // play.render()
        })
    }
}