# TrackIt

# Logistics Tracking Application

This application is a logistics tracking system that allows users to create bookings, track orders, and view order details. It consists of a React-based frontend and a Node.js-based backend (if applicable) and a python backend if applicable.

## About the App

The Logistics Tracking Application provides a user-friendly interface for managing and tracking shipments. Users can:

* **Create Bookings:** Fill out a form to create new shipment bookings.
* **Track Orders:** View a list of all current and past orders.
* **View Order Details:** Get detailed information about specific orders, including status, location, and history.

## Technologies Used

* **Frontend:**
    * React (v19)
    * React Router DOM (v7)
    * Tailwind CSS (v4)
    * Framer Motion
    * Axios
    * Mapbox GL
    * React Map GL
* **Backend (if applicable):**
    * Node.js (with Express.js, etc.)
    * Python (with Flask, etc.)

## Prerequisites

Before running the application, ensure you have the following installed:

* **Node.js:** (v18 or higher recommended) - [Download Node.js](https://nodejs.org/)
* **npm (Node Package Manager):** (Comes with Node.js)
* **Git:** (for cloning the repository) - [Download Git](https://git-scm.com/)
* **Python:** (v3.6 or higher recommended) - [Download Python](https://www.python.org/downloads/)
* **pip (Python Package Installer):** (Comes with Python)

## Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repository


git clone <your-repository-link>
cd <your-repository-directory>

###For Frontend
cd frontend/client
npm install 
npm run dev
This will start the React development server. Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal).

4. Start the Backend (if applicable)
If you have a Node.js backend:

Bash

cd ../../backend # Or the path to your server.js
npm install # if you have a package.json in your backend
node server.js # or npm start if you have a start script
If you have a Python backend:

Bash

cd ../../backend # Or the path to your python server.py
pip install -r requirements.txt # if you have not run npm install yet.
python server.py
The backend should start and listen on the specified port (e.g., http://localhost:3000).

