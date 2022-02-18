import { Product } from "../Product/Product"
import "./favorites.css"

function Favorites({ favorites, setFavorites }) {
    const onDelete = id => {
        setFavorites(favorites.filter((pet) => (
            pet.id !== id
        )))
    }
    return (
        <>
            {favorites.length > 0 ?
                <div className="container-favorites">
                    {favorites.map((pet, i) => (
                        <>
                            <Product product={pet} key={i} />
                            <button onClick={() => {onDelete(pet.id)}}>Delete</button>
                        </>
                    ))}
                </div>
                : <div>Lo sentimos aun no tienes favoritos</div>}
        </>
    )
}

export { Favorites }