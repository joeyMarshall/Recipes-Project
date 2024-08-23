Recipe Project
A full-stack recipe management application built with Django for the backend and React for the frontend. This application allows users to view, add, and manage recipes.

Table of Contents
Features
Tech Stack
Installation
Usage
API Endpoints
Contributing
License
Features
View Recipes: Display a list of all recipes.
Add Recipes: Add new recipes with a title and description.
API Integration: Frontend and backend communicate via REST API.
Tech Stack
Frontend: React, CSS
Backend: Django, Django REST Framework
Database: SQLite (default for Django development)
Installation
Backend
Clone the repository:

bash
Copy code
git clone https://github.com/joeyMarshall/Recipes-Project.git
cd Recipes-Project/recipe_project
Set up a virtual environment:

bash
Copy code
python3 -m venv venv
source venv/bin/activate
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run migrations:

bash
Copy code
python manage.py migrate
Run the server:

bash
Copy code
python manage.py runserver
Frontend
Navigate to the frontend directory:

bash
Copy code
cd recipe-frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Usage
Frontend: Visit http://localhost:3000 to access the React application.
Backend: The API is accessible at http://localhost:8000/api/recipes/.
API Endpoints
GET /api/recipes/: Retrieve a list of recipes.
POST /api/recipes/: Add a new recipe.
Contributing
Fork the repository.
Create a feature branch.
Make your changes.
Submit a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
