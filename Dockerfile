FROM golang:1.22.0-alpine3.18 as builder

WORKDIR /app

COPY . .

COPY go.mod go.sum ./
RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux go build -o app

FROM alpine:3.7

WORKDIR /app

COPY --from=builder /app/app /app/app
COPY --from=builder /app/static /app/static

EXPOSE 8080
CMD ["/app/app"]