
function getProducts () {

        const apiUrl = "http://localhost:5000/api/products"

        fetch(apiUrl)
            .then(r => r.json())
}