package db

import (
	"log"
	"errors"
	// "github.com/dgrijalva/jwt-go"
	pg "github.com/go-pg/pg"
	orm "github.com/go-pg/pg/orm"
)

type User struct {
	Name string
	Password string
}

func SignUp(user *User, db *pg.DB) error {
	// CreateUserTable(db)

	var users []User
	exists, err := db.Model(&users).Where("name = ?", user.Name).Exists()
	if err != nil {
		log.Println("Error when looking for existing users, Reason: ", err)
		return err
	} else if exists {
		err := errors.New("Username already taken...")
		// err := fmt.Errorf("User already in DB: ", user.Name)
		log.Println(err)
		return err
	} else {
		insertErr := db.Insert(user)
		if insertErr != nil {
			log.Printf("Error while inserting new item into DB, Reason: %v\n", insertErr)
			return insertErr
		}
		log.Printf("User %s inserted succesfully.\n", user.Name)
	}

	return nil
}

func SignIn() {
	
}

func CreateUserTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions {
		IfNotExists: true,
	}
	createErr := db.CreateTable(&User{}, opts)

	if createErr != nil {
		log.Printf("Error while creating table prductItems, Reason: %v\n", createErr)
		return createErr
	}
	log.Printf("Table productItems created successfully.\n")
	return nil
}