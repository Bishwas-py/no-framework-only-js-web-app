package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	homepageHTML, _ := ioutil.ReadFile("./template/index.html")
	fmt.Fprint(w, string(homepageHTML))
}

func serveSTATIC(path string, name string) {
	serviceableFILE := http.FileServer(http.Dir(path))
	http.Handle("/"+name+"/", http.StripPrefix("/"+name, serviceableFILE))
}

func main() {

	serveSTATIC("./components", "c")
	serveSTATIC("./media", "media")
	serveSTATIC("./static", "static")

	http.HandleFunc("/", homePage)

	const serverPort = ":8081"

	println("Server started for http://localhost" + serverPort)
	println("Also, started for http://0.0.0.0" + serverPort)

	log.Fatal(http.ListenAndServe(serverPort, nil))
}
