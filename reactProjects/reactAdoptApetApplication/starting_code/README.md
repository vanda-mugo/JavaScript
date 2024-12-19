# Adopt a Pet!

Welcome to the Adopt a Pet project! In this project, you will add client-side routing to a React application using React Router. The goal is to build a pet adoption website that allows users to view all the animals of a particular species and view the profiles of specific animals.

## Project Overview

This project aims to help you practice using React Router to implement client-side routing in a React application. The app includes various components to display a list of adoptable pets, view detailed information about individual pets, search for pets by name, and handle cases where pet details are not available.

## Objectives

- Display pets by species on the HomePage component based on the current URL.
- Show the PetDetailsPage when the URL includes a specific pet's ID.
- Display data for the correct pet on the PetDetailsPage based on URL parameters.
- Redirect to the SearchPage when a user searches for a pet in the search bar.
- Redirect to a PetNotFoundPage when a pet's details are not available.
- Include a "Go Home" button on the PetNotFoundPage to return to the root path.

## Getting Started

### Setup Instructions

1. **Clone the Repository**: Download the project files by clicking the "Download" button or cloning the repository.
2. **Install Dependencies**: Navigate to the project folder in your terminal and run the following command to install the required dependencies:
   ```bash
   npm install

3. **Install react router**:
    ```bash 
    npm install --save react-router-dom@6
    ```
4. **Start the application**:
    ```bash 
    npm start 
    ```
    The application will start and be available at http://localhost:3000.

5. **Project Structure**:
    Take some time to familiarize yourself with the project's starting code. The primary components you'll work with are located in the src/ folder:
    ```bash
    src/App.js (App)
    src/pages/home/index.js (HomePage)
    src/pages/detail/index.js (PetDetailsPage)
    src/pages/search/index.js (SearchPage)
    src/pages/petNotFound/index.js (PetDetailsNotFound)
    ```

6. **Using Mock Service Worker(MWS)**:
    This project uses Mock Service Worker (MSW) to replicate the functionality of an external API. To use MSW, it's recommended to use Google Chrome and enable third-party cookies.

7. **Routing Implementation**:
    1. ***HomePage Component***: 
    Modify the HomePage component to respond to the browser’s current URL by displaying pets of the species the user wishes to view.

    2. ***PetDetailsPage Component***: 
    Create a route to display the PetDetailsPage when the URL includes a specific pet's ID. Use URL parameters to display the correct pet's data.

    3. ***SearchPage Component***: 
    Redirect users to the SearchPage when they search for a pet using the search bar. Use the query parameter called name to filter pets by name.

    4. ***PetNotFoundPage Component***: 
    Redirect users to the PetNotFoundPage when a pet's details are not available. Include a "Go Home" button that navigates to the root path.

8. **Instructions**
    ***Create Routes***: 
    Use React Router to create the necessary routes for the application.

    ***Fetch and Display Data***: 
    Ensure the components fetch and display the correct data based on URL parameters and query parameters.

    ***Handle Redirects***: 
    Implement redirects to handle cases where a pet's details are not available or when users search for a pet.