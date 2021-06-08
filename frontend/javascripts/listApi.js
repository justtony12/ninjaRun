class ListApi {
    static fetchLists() {
        fetch('http://localhost:3000/lists')
        .then(resp => resp.json())
        .then(json => json.forEach(listObj => {
            let list = List.findOrCreateBy(listObj)
            list.addToDropDown()
            list.render()
        }))
    }
}