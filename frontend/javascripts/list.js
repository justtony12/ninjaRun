class List {
    static all= []
    // static dropDownOptions = []

    constructor({name, id, players = []}) {
        this.name = name
        this.id = id
        // this.players = players
        List.all.push(this)
    }

    static getAll() {
        return this.all
    }

    static findByName(name) {
        return this.all.find(function(list) {list.name === name})
    }

    static findById(id) {
        return this.all.find(list => list.id === id)
    }

    static findOrCreateBy(listObj) {
        return this.findByName(listObj.name) || new List(listObj)
    }

    getPlayers() {
        return Player.all.filter(player => this.id === player.list_id)
    }

    // addToDropDown() {
    //     const option = document.createElement("option")
    //     option.value = this.id
    //     option.innerText = this.name
    //     playerSelectList().append(option)
    // }

    render(){
        const h4 = document.createElement('h4')
        const a = document.createElement('a')
        a.id = `list-${this.id}`
        a.innerText = this.name
        a.href = '#'
        a.addEventListener('click', this.renderPlayers)
        h4.appendChild(a)
    }

    renderPlayers = (e) => {
        const nextLiSibling = e.target.nextSibling
        if(nextLiSibling) {
            const children = Array.from(e.target.parentNode.children)
            const lis = children.slice(1)
            lis.forEach((li) => li.remove())
        }
        else {
            this.getPlayers().forEach(element => element.render())
        }
    }

    renderPlayers(list) {
        return list
    }
}