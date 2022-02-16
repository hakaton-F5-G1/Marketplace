import Global from "../Global/Global"

async function getProductById(id) {
    return fetch(`${Global.getProducts}/${id}`)
        .then(r => r.json())
}
export { getProductById }