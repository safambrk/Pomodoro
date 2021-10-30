# Pomodoro App




## Build & Run with Dockerfile
### Step 1
$ docker build -t pomodoro:1.0 .
### Step 2
$ docker run -d -p 5000:80 --name pomodoro pomodoro:1.0



## Build & Run with docker compose
$ docker-compose build



## Access Pomodoro App
Open http://localhost:5000/



## Docker Hub Repo
https://hub.docker.com/repository/docker/safambrk/pomodoro
