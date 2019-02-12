# Similar Listings and Recommendations
A module which displays similar homes based on the currently selected home.

## Challenge

Scale the application to handle production like levels of requests on a t2-micro server from Amazon Web Services. 

### Prerequisites

Serveral deployed instances of the service, an independent load balancer, Redis, and MongoDB server. 
All being run on EC2 t2-micro server from AWS.

### Installing with Docker
1. Install Docker on EC2 instance. 

2. Pull images from DockerHub on an EC2 AWS instance.
```
 sudo docker run -p 80:9011 -d talalnweiran/lb
```
3. Deploy EC2 instance with MongoDB installed, and connect to each deployed service. 
4. Deploy EC2 instance with Redis install, and connect to each deployes service.
5. Deploy EC2 instance with Nginx installed, configured to 'Least Connection' and update config file to redirect traffic to deployed services.


## Install locally without loadbalancer
1. Install dependencies. 
```
npm install
```
2. Build bundle file.
```
npm run react-dev
```
3. Run server.
```
npm run server-dev
```

## Built With
Node.js, React, Express.js, MongoDB, Redis, Nginx, Docker, Amazon Web Services and Postgres. 

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

Talal Nweiran

## Acknowledgments
Moe Mosaad
