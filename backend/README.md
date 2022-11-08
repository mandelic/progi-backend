# Sahisti

A simple backend service for a chess club management.
The application was written in Java programming language using the Spring Boot Framework.

## Getting Started

### Requirements

For building and running the application you need:

* JDK 17
* PostgreSQL 14

### Running the application locally

* To run the application, you must be connected to Postgres database.
1. Create a database with the name *sahisti*
2. Set username to *postgres*, and leave password empty.
3. If establishing connection succeeded you can proceed with running the application.

*Intellij specific database setup:*
   1. To add a new database connection (data source) open Database window through *View -> Tool Windows -> Database*.
         In Database window, you can add new Data Source by clicking *+* sign then select *PostgreSQL*. Set user to *postgres*, and Database to *sahisti*.
         Everything else should be default value.
   2. To ensure that the connection to the data source is successful, click Test Connection.
   3. If Test connection succeeded you can proceed with running the application.
####
* Run the following command in a terminal window (in a directory where the project is located):   
  ```./gradlew bootRun``` or click Run
####
* After the application is successfully done loading, you can run defined endpoint in *Postman* with
  ```http://localhost:8080/api/v1/users```
#### 