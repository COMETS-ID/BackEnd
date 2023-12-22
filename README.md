# ☁️ COMETS.ID ☁️
Team CH2-PS210 | Bangkit Capstone Project 2023

<H3>Infrastructure Project 🏢</H3>
<p>We use 3 services in <a href="https://cloud.google.com/free/?utm_source=google&utm_medium=cpc&utm_campaign=japac-ID-all-id-dr-BKWS-all-super-trial-EXA-dr-1605216&utm_content=text-ad-none-none-DEV_c-CRE_664989825089-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt+~+GCP_General_core+brand_main-KWID_43700077139981276-kwd-26415313501&userloc_9126017-network_g&utm_term=KW_google+cloud+platform&gad_source=1&gclid=CjwKCAiApuCrBhAuEiwA8VJ6Jh6tNgkZJt9Qeb8Lv4B-j-Iq5qjKeixDFP02GCCIUe9cmGrZhLeJnBoCOn8QAvD_BwE&gclsrc=aw.ds&hl=en"><img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" width="70px"></a> Platform for manage this project, namely <a href="https://cloud.google.com/run?hl=en">Cloud Run</a> for deploy API, <a href="https://cloud.google.com/sql?hl=en">Cloud SQL</a> for database MYSQL, <a href="https://cloud.google.com/artifact-registry">Container Registery</a> for Trigger Deploy, and <a href="https://cloud.google.com/security/products/iam">Clooud IAM</a> To set Role</p>

<img src="https://cdn.discordapp.com/attachments/1179738746795606018/1187740114584092754/Google_Cloud_Diagram.png?ex=6597fc2e&is=6585872e&hm=dfd6dcda4066b26e185a4ad888be883a6f7143ab7fa337a4750d250a6b385b9b&" width=75%>

# SetUp

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

# Documentation 🗎 
## link Of Documentation Of Our API
<p>Our API Documentation build with <a href="https://www.postman.com/"><img src="https://symbiotics.co.za/wp-content/uploads/2017/10/postman-logo.png" width="50px"></a>: <a href="https://documenter.getpostman.com/view/31524437/2s9Ykn7gwS">COMETS API Documentation</a></p>

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


