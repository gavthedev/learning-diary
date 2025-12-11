Bootcamp day 31 - Docker Deep Dive + Fixing Django Containers   
- Studied Docker concepts: images, containers, volumes, compose  
- Learned about Dockerfile syntax, tags, layers, clean-up strategies  
- Compared Docker vs VMs and use-cases (dev, cloud, legacy, security)  
- Fixed broken Dockerfile in Django repo (Exercise)   
- Identified + debugged runtime errors in Dockerised Django app (Exercise)   
- Used docker logs, bash shell inside containers, docker compose  
- Prepped PyCharm for Docker interpreter integration (manage.py run configs)

Bootcamp day 32 - GitLab CI/CD & Deployment on DigitalOcean
- Studied client-server model, protocols, IPs, ports
- Practiced curl commands, SSH keys, remote access & Linux user setup
- Learned Docker vs VMs, intro to deployment workflows and CI/CD
- Setup DigitalOcean droplet (Ubuntu 24.04, firewall config, non-root user, Docker, GitLab runner)
- Understood GitLab pipeline with build/lint/push/deploy stages via `.gitlab-ci.yml`
- Registered GitLab runner, configured shell executor, automated Docker deployment

Bootcamp day 33 - Advanced Docker & CI/CD 

- Studied full CI/CD setup with GitLab pipelines (build > lint > push > deploy > cleanup) 
- Understood multi-server deployment (SIT/UAT/PROD) using runner tags
- Wrote .gitlab-ci.yml with stage-based pipeline and conditional deploys
- Learned NGINX config for SPA routing and reverse proxy (frontend + backend split)
- Setup Gunicorn as WSGI server, linked to Django app in Docker
- Reviewed Let's Encrypt + certbot + SSL cert renewal with crontab
- Covered secure environment variable management via GitLab CI/CD secrets
Bootcamp day 34 - Motion Backend Progress

- Continued work on the Motion social platform backend
- Resolved leftover tasks and fixed previous implementation bugs
- Cleaned up models, views, and serializers from earlier days
- Verified endpoints with Swagger and tested API responses
