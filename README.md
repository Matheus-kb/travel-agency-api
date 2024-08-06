# Travel Agency API

This project is a RESTful API for managing travel agency data, including destinations, clients, excursions, and reservations. It provides endpoints for creating, reading, updating, and deleting records in a PostgreSQL database. The API is built with Express.js, Sequelize, and supports CORS.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, retrieve, update, and delete destination records.
- Manage client information.
- Record and manage excursions.
- Log and track reservations.
- CORS support for cross-origin requests.

## Installation

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- PostgreSQL database

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/Matheus-kb/travel-agency-api.git
    cd travel-agency-api
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up the database:
    - Ensure you have a PostgreSQL database running.
    - Update the database connection settings in `./databases/conecta.js` to match your setup.

4. Start the server:
    ```bash
    npm start
    # or
    yarn start
    ```

The API will be running at `http://localhost:3000`.

## Usage

### Running the Server
To run the server, execute:
```bash
npm start
# or
yarn start
