
function postProduct (product) {

    return fetch(apiUrl,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
    )
}