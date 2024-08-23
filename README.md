# Recipe Project
A full-stack recipe management application built with Django for the backend and React for the frontend. This application allows users to view, add, and manage recipes.

## Features
View Recipes: Display a list of all recipes.

Add Recipes: Add new recipes with a title and description.

API Integration: Frontend and backend communicate via REST API.

## Tech Stack
Frontend: React, CSS

Backend: Django, Django REST Framework

Database: SQLite (default for Django development)

# Installation
## Backend
Clone the repository:
```
git clone https://github.com/joeyMarshall/Recipes-Project.git
```
Navigate to the project:
```
cd Recipes-Project/recipe_project
```
Set up a virtual environment:
```
python3 -m venv venv
source venv/bin/activate
```
Install dependencies:
```
pip install -r requirements.txt
```
Run migrations:
```
python manage.py migrate
```
Run the server:
```
python manage.py runserver
```
## Frontend
Navigate to the frontend directory:
```
cd recipe-frontend
```
Install dependencies:
```
npm install
```
Start the development server:
```
npm start
```
## Usage
Frontend: Visit http://localhost:3000 to access the React application.

Backend: The API is accessible at http://localhost:8000/api/recipes/.
## API Endpoints
GET /api/recipes/: Retrieve a list of recipes.

POST /api/recipes/: Add a new recipe.
## Contributing
Fork the repository.

Create a feature branch.

Make your changes.

Submit a pull request.
## License

This project is licensed under the MIT License - see the [License](https://choosealicense.com/licenses/mit/) File for details.
