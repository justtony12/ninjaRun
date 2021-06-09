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
}