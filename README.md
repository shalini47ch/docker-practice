# Docker: Images and Containers

## Concepts

- **Images:** Store all package dependencies. Can be pulled and run as containers.
- **Containers:** Instances of images. Running applications with their own isolated environments.

## Commands

- `docker images`: See available Docker images.
- `docker ps`: List running containers.

## Docker Registry

- **Definition:** Stores Docker images.
- **Types:**
  - **Public:** Accessible to everyone (e.g., Docker Hub).
  - **Private:** Require authentication (e.g., AWS, Azure, GCP registries).

## Official Images

- Images maintained by Docker community (e.g., Redis, MongoDB, Postgres).

## Docker Hub

- Largest Docker registry. Accessible without registration. Search and pull images directly.

## Image Versioning

- Images are versioned. Version changes imply dependency updates. Identified through tags.

## Example Commands

- `docker pull nginx:1.25`: Pull specific version of an image.
- `docker run -d nginx:1.25`: Run container in detached mode.
- `docker logs <container_id>`: View container logs.

## Port Binding

- Connects application running in container to local machine.
- Format: `-p <local_port>:<container_port>`.
- Example: `docker run -d -p 9000:80 nginx:1.25.5-perl`.

# Dockerfile

## Basics

- **FROM:** Base image.
- **RUN:** Install dependencies.
- **COPY:** Copy files/directories.

## Working Directory

- **WORKDIR:** Sets current working directory.

## Building and Running

- `docker build -t node-app:1.0 .`: Build Docker image.
- `docker run -d -p 3000:3000 node-app:1.0`: Run container.
