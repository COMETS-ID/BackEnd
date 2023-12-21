# COMETS.ID
Team CH2-PS210 | Bangkit Capstone Project 2023

```markdown
# Prerequisites
Before running the application, make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

# Tech We Use
- Express.js
- MySQL
- Sequelize
- Cloud Run
- SQL Instance
```

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone [https://github.com/CH2-PS324/palomade-api.git](https://github.com/COMETS-ID/BackEnd.git)
   ```

2. Navigate to the directory:

   ```bash
   cd BackEnd
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## SETTING UP .ENV File

before starting running the application, set env file based on your needs:

```bash
# JWT KEY
ACCESS_TOKEN_SECRET =
REFRESH_TOKEN_SECRET =
```

You Must Create a Database First before going to next step.

## Running the Application

To start the Express.js server and run the database setup:

```bash
# Choose your command : 
npm run start
npm run dev
```

## API Endpoint List

```bash
# Users

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Method  | Domain                                     | Path            | Descripton                 |
| ------- |--------------------------------------------|-----------------|----------------------------|
|[POST]   | https://comets-okxscopjda-et.a.run.app   |/users   |# Register User             |
|[POST]   | https://comets-okxscopjda-et.a.run.app   |/login   |# Login User                |
|[GET]    | https://comets-okxscopjda-et.a.run.app   |/users/:id   |# Get User Detail           |
|[PATCH]  | https://comets-okxscopjda-et.a.run.app   | /users/:id   |# Update User Detail        |

# Assesment
[GET] https://comets-okxscopjda-et.a.run.app/Assesments # Get All Assesment User
[GET] https://comets-okxscopjda-et.a.run.app/Assesment/UserRoom/:id # Get All Assesment from UserRoom
[POST] https://comets-okxscopjda-et.a.run.app/Assesment/ # Create General Assesment User
[POST] https://comets-okxscopjda-et.a.run.app/Assesment/UserRoom/:id # Create Assesment By UserRoom
[DELETE] https://comets-okxscopjda-et.a.run.app/Assesment/UserRoom/:id # Create Assesment By UserRoom



## API Endpoints

List and describe the available endpoints of your API. Provide details such as the HTTP methods supported, expected parameters, and example responses. Organize this section logically based on the different functionalities your API offers.

### 1. Register User

- **Method:** `POST`
- **Path:** `/api/users/register`
- **Description:** endpoint for register users
- **Important Notes:** role is filled with ['supir','organisasi','user']
- **Request Body:**
  ```json
  {
       "name": "Iqbal Palomade",
       "email": "iqbal@palomade.com",
       "password": "12345678",
       "role": "user"
  }
  ```
- **Response Body:**
  ```json
  {
       "message": "User was registered successfully!",
       "data": {
           "name": "Iqbal Palomade",
           "email": "iqbal@palomade.com",
           "password": "12345678",
           "role": "user"
       }
  }
  ```
  

  ```
  
