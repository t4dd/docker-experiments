Lab5 - Running and communicating between multiple containers, intro to docker-compose, and networking using a redis DB and node client.

Lab5b - Auto-restart containers on crash.


#How to Run
cd ./visits
docker-compose up --build
docker-compose down
docker system prune

#Notes
only if you're in a dir w/ docker-compose.yml file

[root@compute-node visits]# docker-compose ps
        Name                       Command               State           Ports         
---------------------------------------------------------------------------------------
visits_node-app_1       docker-entrypoint.sh npm start   Up      0.0.0.0:9091->9091/tcp
visits_redis-server_1   docker-entrypoint.sh redis ...   Up      6379/tcp     