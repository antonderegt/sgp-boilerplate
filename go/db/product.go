package db

import (
	"time"
	"log"
	orm "github.com/go-pg/pg/orm"
	pg "github.com/go-pg/pg"
)

type ProductItem struct {
	RefPointer int `sql:"-"`
	tableName struct{} `sql:"product_items_collection"` // Optional private field, default name would be product_items
	ID int `sql:"id,pk"`
	Name string `sql:"name,unique"`
	Desc string `sql:"desc"`
	Image string `sql:"image"`
	Price float64 `sql:"price,type:real"`
	Features struct{
		Name string
		Desc string
		Imp int	
	} `sql:"features,type:jsonb"`
	CreatedAt time.Time `sql"created_at"`
	UpdatedAt time.Time `sql:"updated_at"`
	IsActive bool `sql:"is_active"`
}

func (pi *ProductItem) Save(db *pg.DB) error {
	insertErr := db.Insert(pi)
	if insertErr != nil {
		log.Printf("Error while inserting new item into DB, Reason %v\n", insertErr)
		return insertErr
	}
	log.Printf("ProductItem %s inserted succesfully.\n", pi.Name)
	return nil
}

func (pi *ProductItem) SaveAndReturn(db *pg.DB) (*ProductItem, error){
	InsertRestult, insertErr := db.Model(pi).Returning("*").Insert()
	if insertErr != nil {
		log.Printf("Error while inserting ew item, Reason: %v\n", insertErr)
		return nil, insertErr
	}
	log.Printf("ProductItem Inserted successfullly.\n")
	log.Printf("Received new value result is: %v\n", InsertRestult.Model)
	return pi, nil
}

func (pi *ProductItem) SaveMultiple(db *pg.DB, items []*ProductItem) error {
	_, insertErr := db.Model(items[0], items[1]).Insert()
	if insertErr != nil {
		log.Printf("Error while inserting bulk items, Reason: %v\n", insertErr)
		return insertErr
	}
	log.Printf("Bulk Insert succesfully\n")
	return nil
}

func CreateProdItemsTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions {
		IfNotExists: true,
	}
	createErr := db.CreateTable(&ProductItem{}, opts)

	if createErr != nil {
		log.Printf("Error while creating table prductItems, Reason: %v\n", createErr)
		return createErr
	}
	log.Printf("Table productItems created successfully.\n")
	return nil
}