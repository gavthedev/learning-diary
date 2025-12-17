## Bootcamp day 36 Motion Backend

Started new group project to build the Motion social media API.

Today we:
- Created project skeleton with group (Django + Docker base)
- Set up  for JWT auth
- Connected to DigitalOcean droplet
- Verified Dockerized Django app is running
- Prepared  + email SMTP structure for later

Next steps: user registration, first endpoints, permissions, db models.
Bootcamp day 37 - Motion Project: Post Endpoint 

- Continued work on group project (Motion)
- Completed clean implementation of Post model - domain-focused  
- Setup serializers with likes_count, safe shared_post, and nested author info
- Created views: list/create, retrieve/update/destroy, like/unlike
- Applied clean permission structure (IsAuthor, IsAdminOrSafeMethod)
- Prepared ToggleLikeView

 Bootcamp day 38 Continued development of the project   
- Successfully tested all implemented endpoints  
- Added new features:  
  - Search posts endpoint  
  - Get posts by specific user  
  - Get posts by followed users  
  - Get posts by friends  
  - Get posts I’ve liked  
  - Share post behavior
