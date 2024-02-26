package main

import (
	"cron/colors"
	"cron/ws"
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./static")))

	go ws.RunHub()
	http.HandleFunc("/ws", ws.HandleWS)

	go func() {
		println(colors.CYAN)
		if err := http.ListenAndServe(":8080", nil); err != nil {
			fmt.Printf("Error starting server: %s\n", err)
		}
	}()

	select {}
}
