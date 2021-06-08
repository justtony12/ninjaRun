class Player {
    static all = []

    constructor({name, score}) {
        this.name = name
        this.score = score
        Player.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(player) { player.name === name})
    }

    static findById(id) {
        return this.all.find(player => player.id === id)
    }

    static findOrCreateBy(playerObj) {
        return this.findByName(playerObj.name) || new Player(playerObj)
    }

    render(){
        let playerAnchor = document.querySelector(`#list-${this.list_id}`)
        const li = document.createElement('li')
        playerAnchor.dataset.playId = this.list_id
        li.innerHTML = `
        <strong class="player-name">${this.name}</strong>
        <span class="player-score">${this.score}</span>
        `
    }
}