Bootcamp day 26 - Django Setup + Recipe API Project 
- Set up new Django project with conda env & requirements.yml 
- Configured PyCharm for Django  
- Learned about project structure, views, URLs, settings, language/timezone
- Built Recipe Management API from scratch
  • Created Recipe model with fields: title, description, ingredients, favourite, difficulty, created, updated
  • Used Django admin to view & manage recipes
 
  • Implemented API views with class-based views (CBV)
  • Built endpoints for CRUD (get all, get single, create, update, delete)
  • Used Postman to test all endpoints

Bootcamp day 27 - Django REST Framework, JWT & Cookbook API
- Studied DRF Request/Response lifecycle 
- Understood GenericAPIView and ListAPIView pattern for reusability
- Built Serializers (Model + nested + method fields), SerializerMethodField
- Modeled relationships with ForeignKey, ManyToMany, OneToOne
- Practiced ORM filtering with queryset overrides and Q objects
- Explored admin customization 
- Reviewed Auth types: Basic, Session, Token, JWT, cookies, signed requests
- Installed and configured JWT via djangorestframework-simplejwt
  • /api/token/, /refresh/, /verify/ working in Postman
- Built full Cookbook/Recipe API:
  • Related models: User, Recipe, Cookbook
  • Endpoints for full CRUD + toggle favorite
  • Used GenericAPIView, custom get_queryset(), JWT auth required
  • Nested serializers for detailed responses
 

Bootcamp day 28 - DRF Concrete View Classes, Permissions, Finalizing Cookbook API 
- Used ListCreateAPIView & RetrieveUpdateDestroyAPIView for cleaner view logic
- Applied permissions: IsAuthenticatedOrReadOnly, custom IsOwnerOrReadOnly
- Built endpoints for:
  • Full CRUD for Recipe + Cookbook

- Implemented nested serializer fields 
- Added search query support for title/description filtering 

- Set permission classes per view to allow public read + private write
- Used get_queryset() override for filtering and query param handling
- Used lookup_field override for URLs 

Bootcamp day 29 - DRF Advanced: Swagger, Filtering, Media Files 
- Worked with Swagger UI with drf-yasg
- Enforced permissions with IsAuthenticated + custom IsAuthorOrReadOnly
  • Public read access, private write access for authors only
- Used RetrieveUpdateDestroyAPIView + ListCreateAPIView for concrete endpoints
- Added search param filtering (?search=...) on recipes + cookbooks
- CookbookSerializer shows count of related recipes
- Configured static/media file handling in development
  • MEDIA_URL / MEDIA_ROOT setup
 
- Defined upload_to function for per-user file structuring
- Practiced DRF ORM filters: Q objects, F() expressions, reverse lookups
- Added Swagger doc protection (login required for protected endpoints)

- Bootcamp day 25: Motion backend setup
  • Initialized Motion backend project with DRF
  • Created social app and registered in settings
  • Setup JWT authentication (simplejwt)
  • Added custom user model (AbstractUser)
  • Base URL structure: /backend/api/
  • Ready to implement post/follow endpointσ
No coding today, rest day getting ready for an upcomming challening week!
- Sunday - Previewed Week 7 topics to prepare:
  • Django Assignment Part II
  • Docker basics, GitLab CI/CD
  • Motion backend deployment plans

