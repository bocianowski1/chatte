run:
	@docker build -t chat .
	@docker run -p 8080:8080 chat
