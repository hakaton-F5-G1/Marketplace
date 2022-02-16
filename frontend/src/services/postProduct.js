import Global from "../Global/Global";

function postProduct (product) {
    return fetch(Global.getProducts,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
    )
}
export {postProduct}