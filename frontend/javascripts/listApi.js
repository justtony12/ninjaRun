class ListApi {
    static baseUrl = `http://localhost:3000/lists`

    static fetchLists() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            let list = List.findOrCreateBy(listObj)
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