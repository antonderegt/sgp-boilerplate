module github.com/cosmtrek/air

go 1.13

require (
	github.com/creack/pty v1.1.9
	github.com/fatih/color v1.7.0
	github.com/fsnotify/fsnotify v1.4.7
	github.com/mattn/go-colorable v0.1.4 // indirect
	github.com/mattn/go-isatty v0.0.10 // indirect
	github.com/pelletier/go-toml v1.6.0
	golang.org/x/sys v0.0.0-20191110163157-d32e6e3b99c4 // indirect
)

// My own imports

require (
	github.com/antonderegt/db v0.0.0
	github.com/dgrijalva/jwt-go v3.2.0+incompatible // indirect
	github.com/go-pg/pg v8.0.6+incompatible
	github.com/gorilla/mux v1.7.3
	github.com/gorilla/sessions v1.2.0 // indirect
	github.com/jinzhu/inflection v1.0.0 // indirect
	mellium.im/sasl v0.2.1 // indirect
)

replace github.com/antonderegt/db v0.0.0 => ./db
