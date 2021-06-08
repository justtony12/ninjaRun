class PlayerApi {
    static baseUrl = `http://localhost:3000/players`

    static fetchPlayers() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(playerObj => {
            Player.findOrCreateBy(playerObj)
        }))
    }

    static handleSubmit(e) {
        e.preventDefault()
        const data = {
            name: playerName().value,
            score: playerScore().value
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
            let player = new Player(json)
            playerForm().reset()
            player.render()
        })
    }
}