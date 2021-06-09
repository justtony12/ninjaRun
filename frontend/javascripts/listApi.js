class ListApi {
    static fetchLists() {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            let list = List.findOrCreateBy(listObj)
            // list.addToDropDown()
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
}