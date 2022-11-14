# Sahisti

A simple backend service for a chess club management.
The application was written in Java programming language using the Spring Boot Framework.

## Getting Started

### Requirements

For building and running the application you need:

* JDK 17
* PostgreSQL 14

### Running the application locally

*Intellij specific database setup:*
   1. To add a new database connection (data source) open Database window through *View -> Tool Windows -> Database*.
         In Database window, you can add new Data Source by clicking *+* sign then select *PostgreSQL*. Set user to ```postgres```, password to ```t4gi5oDJHx3rPtjNk7GA``` and URL to ```jdbc:postgresql://containers-us-west-70.railway.app:6705/railway```.
         Everything else should be default value.
   2. To ensure that the connection to the data source is successful, click Test Connection.
   3. If Test connection succeeded you can proceed with running the application.
####
* Run the following command in a terminal window (in a directory where the project is located):   
  ```./gradlew bootRun``` or click Run
####
* After the application is successfully done loading, you can run defined endpoint in *Postman* with
  ```http://localhost:8080/api/v1/users```


| Http Method | path               | ROLE_MEMBER | public | 
|-------------|--------------------|-------------|--------|
| GET         | /api/v1/users      | ✅           | -      |
|             | /api/v1/users/{id} | ✅           | -      |
| POST        | /api/v1/users      | ✅           | -      | 
|             | /api/v1/login      | ✅           | ✅      | 

####
```POST: http://localhost:8080/api/v1/login```: 
```
{
    "email": "some@example.com",
    "password": "myPassw0rd"
}
```
####

####
```POST: http://localhost:8080/api/v1/users```:
```
{
    "email": "some@example.com",
    "firstName":"Name",
    "lastName":"LastName",
    "password": "myPassw0rd",
    "phoneNumber":"0987654321",
    "cardNumber":"123456789"
}
```
####

