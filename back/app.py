import sqlite3
from src.webserver import create_app
from src.repository.Sqlite3ProductRepositoryImpl import Sqlite3ProductRepositoryImpl


database_path = "data/products-list.db"

repositories = {
    "product": Sqlite3ProductRepositoryImpl(database_path),
}

app = create_app(repositories)

app.run(debug=True, host="0.0.0.0", port="5000")
