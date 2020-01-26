package db

import (
	"net/http"
    "log"
    "encoding/json"
    "github.com/gorilla/sessions"
)

var users = map[string]string{
    "user1": "password1",
    "user2": "password2",
    "1": "1",
}

type Credentials struct {
    Password string `json:"password"`
    Username string `json:"username"`
}

// var store = sessions.NewCookieStore([]byte(os.Getenv("SESSION_KEY")))
var store = sessions.NewCookieStore([]byte("secret"))

func Login(w http.ResponseWriter, r *http.Request) {
    (w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    
    var creds Credentials
	  // Get the JSON body and decode into credentials
	  err := json.NewDecoder(r.Body).Decode(&creds)
	  if err != nil {
		  // If the structure of the body is wrong, return an HTTP error
          w.WriteHeader(http.StatusBadRequest)
		  return
      }
      
      expectedPassword, ok := users[creds.Username]

      if !ok || expectedPassword != creds.Password {
        w.WriteHeader(http.StatusUnauthorized)
        return
    }
    
    session, err := store.Get(r, "session-name")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
	}

	// authenticate user

    session.Values["authenticated"] = true
    session.Values["user"] = true
    err = session.Save(r, w)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
}

func Secret(w http.ResponseWriter, r *http.Request) {
	(w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	session, err := store.Get(r, "session-name")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
	}

	auth, ok := session.Values["authenticated"].(bool)
	if !ok || !auth {
        http.Error(w, "Forbidden", http.StatusForbidden)
        return
    }

	log.Printf("welcome!")
}

func Logout(w http.ResponseWriter, r *http.Request) {
	(w).Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	
    session, err := store.Get(r, "session-name")
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
	}

    session.Values["authenticated"] = false
    err = session.Save(r, w)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
}