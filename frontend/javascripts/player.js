class Player {
    static all = []

    constructor({name, score, list_id, id}) {
        this.name = name
        this.score = score
        this.list_id = list_id
        this.id = id
        Player.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(player) { player.name === name})
    }

    static findById(id) {
        return this.all.find(player => player.id === id)
    }

    static findOrCreateBy({name, score, list, id}) {
        return this.findByName(name) || new Player({name, score, list_id: list.id, id})
    }

    render() {
        let listAnchor = document.querySelector(`#list-${this.list_id}`)
        const li = document.createElement('li')
        // debugger
        listAnchor.dataset.listId = this.list_id
        li.innerHTML = `
            <strong class="player-name">Name: ${this.name}</strong><br>
            <span class="player-score">Time: ${this.score} second(s)</span>
        `
        listAnchor.parentNode.appendChild(li)
    }
}