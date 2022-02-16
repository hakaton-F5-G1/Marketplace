import Global from "../Global/Global"

function getProducts() {
    return fetch(Global.getProdudcts)
            .then(r => r.json())
}
export { getProducts }