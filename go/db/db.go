package db

import (
	"log"
	"os"
	pg "github.com/go-pg/pg"
)

func Connect() *pg.DB {
	opts := &pg.Options {
		User: "postgres",
		Password: "password",
		Addr: "Antons-MacBook-Pro.local:5432",
		Database: "postgres",
	}
	// db := pg.Connect(opts)
	var db *pg.DB = pg.Connect(opts)

	if db == nil {
		log.Printf("Failed to connect to database")
		os.Exit(100)
	}
	log.Printf("Connection to database successful.\n")
	// CreateProdItemsTable(db)

	// closeErr := db.Close()
	// if closeErr != nil {
	// 	log.Printf("Error while closing the connection, Reason: %v\n", closeErr)
	// 	os.Exit(100)
	// }
	// log.Printf("Connection closed succesfully.\n")

	return db
}