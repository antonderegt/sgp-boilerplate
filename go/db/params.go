package db

import (
	"log"
	pg "github.com/go-pg/pg"
)

type Params struct {
	Param1 string
	Param2 string
	Param3 string
}

func PlaceHolderDemo(db *pg.DB) (string, error) {
	var value string
	params := Params {
		Param1: "This is param1",
		Param2: "This is param2",
		Param3: "Product 4",
	}
	var query string = "SELECT * FROM product_items_collection WHERE name=?param3"
	// var query string = `SELECT ?param1`
	_, selectErr := db.Query(pg.Scan(&value), query, params)
	// var query string = "SELECT ?1"
	// _, selectErr := db.Query(pg.Scan(&value), query, 42, 41)
	if selectErr != nil {
		log.Printf("Error while running the select query, Reason: %v\n", selectErr)
		return value, selectErr
	}
	log.Printf("Querying data succesfully, Scanned value: %v\n", value)
	return value, nil

}

func GetItem(db *pg.DB, name string) (*ProductItem, error) {
    var pi ProductItem
    _, err := db.QueryOne(&pi, `SELECT * FROM product_items_collection WHERE name = ?`, name)
    return &pi, err
}