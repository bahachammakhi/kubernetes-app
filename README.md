# Kubernetes application

![GitHub followers](https://img.shields.io/github/followers/bahachammakhi?style=social)

> MERN Application deployed using kubernetes 🧑‍💻

![Logo](https://kubernetes.io/images/kubernetes-horizontal-color.png)

## Table of contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Docker images](#docker)
- [Run in kubernetes](#kubernetes)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## Technologies

- Javascript
- [React](https://reactjs.org/) A JavaScript library for building user interfaces. 💻
- [Nodejs](https://nodejs.org/en/) Javascript runtime. 💻
- [Kubernetes](https://kubernetes.io/) Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.🧑‍💻

## Setup

Clone the project :

```bash
$git clone https://github.com/bahachammakhi/kubernetes-app.git

$cd kubernetes-app
```

## Docker :

```bash
$docker login

$cd client

$yarn

$yarn build

$docker build -f Dockerfile -t $DOCKER_USER/client

$docker push $DOCKER_USER/client

$cd ../server

$docker build -f Dockerfile -t $DOCKER_USER/server

$docker push $DOCKER_USER/server


```

### Kubernetes:

```bash
$kubectl apply -f ./k8s
```

## Features

List of features:

- Deploying mongodb
- Deploy nodejs server
- Deploy React using nginx
- Create service

## Status

Project is: _done_

## Contact

Created by [@bahachammakhi](https://www.bahachammakhi.tn/) - feel free to contact me!
