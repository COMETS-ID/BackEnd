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
   git clone [https://github.com/COMETS-ID/BackEnd.git]
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

### Users
| Method  | Domain                                     | Path            | Descripton                 |
| ------- |--------------------------------------------|-----------------|----------------------------|
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /users   | Register User             |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /login   | Login User                |
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /users/:id   | Get User Detail           |
|[PATCH]  | https://comets-okxscopjda-et.a.run.app     | /users/:id   | Update User Detail        |

### Assesment
| Method  | Domain                                     | Path                     | Descripton                 |
| ------- |--------------------------------------------|--------------------------|----------------------------|
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /Assesments              | Get All Assesment User             |
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /Assesment/UserRoom/:id  | Get All Assesment from UserRoom                |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /Assesment               | Create General Assesment User          |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /Assesment/UserRoom/:id  | Create Assesment By UserRoom     |
|[DELETE] | https://comets-okxscopjda-et.a.run.app     | /Assesment/UserRoom/:id  | Delete Assesment     |

### Post
| Method  | Domain                                     | Path                     | Descripton                 |
| ------- |--------------------------------------------|--------------------------|----------------------------|
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /Posting/              | Get All the Post             |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /Posting/               | Create A Post          |
|[DELETE] | https://comets-okxscopjda-et.a.run.app     | /Posting/:id  | Delete A Post     |

### Comment
| Method  | Domain                                     | Path                     | Descripton                 |
| ------- |--------------------------------------------|--------------------------|----------------------------|
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /Comment/Posting/:id     | Get All Commoents From A Post             |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /Comment/Posting/:id     | Create A Comment From A Post          |
|[DELETE] | https://comets-okxscopjda-et.a.run.app     | /Comment/:id             | Delete A Comment     |

### Rooms
| Method  | Domain                                     | Path                     | Descripton                 |
| ------- |--------------------------------------------|--------------------------|----------------------------|
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /Rooms    | Get All Rooms From user             |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /Room     | Create A Room          |
|[DELETE] | https://comets-okxscopjda-et.a.run.app     | /Room/:id             | Delete A Room     |

### UserRoom
| Method  | Domain                                     | Path                     | Descripton                 |
| ------- |--------------------------------------------|--------------------------|----------------------------|
|[GET]    | https://comets-okxscopjda-et.a.run.app     | /User/Rooms/:id    | Get All Member Room             |
|[POST]   | https://comets-okxscopjda-et.a.run.app     | /User/Room     | Invite A User To Room|
|[DELETE] | https://comets-okxscopjda-et.a.run.app     | /User/Room/:id             | Delete A UserRoom     |

```bash


## API Endpoints

List and describe the available endpoints of your API. Provide details such as the HTTP methods supported, expected parameters, and example responses. Organize this section logically based on the different functionalities your API offers.

### 1. Register User

  ```
  

  ```
  
