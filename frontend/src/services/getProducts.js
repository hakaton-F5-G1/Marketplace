import Global from "../Global/Global"

async function getProducts() {
    return fetch(Global.getProducts)
            .then(r => r.json())
}
export { getProducts }