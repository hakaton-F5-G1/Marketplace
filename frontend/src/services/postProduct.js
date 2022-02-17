import Global from "../Global/Global";

function postProduct (product) {
    return fetch(Global.getProducts,
        {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
            "Content-Type": "application/json",
            },

        }
    )
}
export {postProduct}