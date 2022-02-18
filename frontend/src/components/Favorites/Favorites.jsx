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
                            <div className="container-favorite">
                                <Product product={pet} key={i} />
                                <button className="delete-favorite" onClick={() => { onDelete(pet.id) }}>X</button>
                            </div>
                        </>
                    ))}
                </div>
                : <div>Lo sentimos aun no tienes favoritos</div>}
        </>
    )
}

export { Favorites }