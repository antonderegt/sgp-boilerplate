package main

import (
	"net/http"
	"fmt"
	"log"
	"time"
	"encoding/json"
	"github.com/gorilla/mux"
	"github.com/antonderegt/db"
    pg "github.com/go-pg/pg"
)

type Error struct {
	Code string
	Error string
}

func main() {
    // pg_db := db.Connect()
	// SaveProduct(pg_db)
	r := mux.NewRouter()
	r.HandleFunc("/", HelloServer)
	r.HandleFunc("/{path}", HelloServer)
	r.HandleFunc("/api/login", db.Login).Methods("POST")
	r.HandleFunc("/api/secret", db.Secret).Methods("GET")
	r.HandleFunc("/api/logout", db.Logout).Methods("GET")
	r.HandleFunc("/api/signup", SignUp)
	r.HandleFunc("/api/welcome", db.Welcome)
	r.HandleFunc("/api/refresh", db.Refresh)
	r.HandleFunc("/api/signin", db.Signin)
	r.HandleFunc("/api/{name}", LoadProduct)
	
    http.ListenAndServe(":8080", r)
}

func SignUp(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	log.Println("/api/signup was HIT!")

	var user db.User
	err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        log.Println("Error decoding body: ", err)
    }
	log.Println("POSTED user: ", user.Name)
	
	pg_db := db.Connect()
	signUpErr := db.SignUp(&user, pg_db)
	if signUpErr != nil {
		w.WriteHeader(400)
		w.Header().Set("Content-Type", "application/json")
		errM := Error{
			Code: "400",
			Error: signUpErr.Error(),
		}
		json.NewEncoder(w).Encode(errM)
		return
	}

	jData, _ := json.Marshal(user)
	w.Write(jData)
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	log.Println("/api/signin was HIT!")
	var user db.User
	_ = json.NewDecoder(r.Body).Decode(&user)

	log.Println("Name: ", user.Name)
}

func LoadProduct(w http.ResponseWriter, r *http.Request) {
	log.Println("/api/{name} was HIT!")
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")

	pi := loadProductFromDB(r.URL.Path[5:])

	jData, _ := json.Marshal(pi)
	w.Write(jData)
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	// (*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func loadProductFromDB(name string) *db.ProductItem {
	pg_db := db.Connect()
	defer pg_db.Close()
	pi, _ := db.GetItem(pg_db, name)
	return pi
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello you, %s!", r.URL.Path[1:])
}

func SaveProduct(dbRef *pg.DB) {
    newPI1 := &db.ProductItem{
        Name: "Product 2",
		Desc: "Description",
		Image: "Img path",
		Price: 4.5,
		Features: struct{
			Name string
			Desc string
			Imp int	
		}{
			Name: "F1",
			Desc: "F1 desc",
			Imp: 3,
		},
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsActive: true,
    }

    newPI2 := &db.ProductItem{
        Name: "Product 3",
		Desc: "Description",
		Image: "Img path",
		Price: 4.5,
		Features: struct{
			Name string
			Desc string
			Imp int	
		}{
			Name: "F1",
			Desc: "F1 desc",
			Imp: 3,
		},
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
		IsActive: true,
    }

    totalItems := []*db.ProductItem{newPI1, newPI2}
    newPI1.SaveMultiple(dbRef, totalItems)
}