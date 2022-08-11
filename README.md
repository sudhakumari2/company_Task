# company_task

### In this task I perform CRUD operation on data validation
 
# Requirement Installation
- In this task i installed some dependencies . there are some basic command

# express
- Express is a minimal flexible framework to build our application it provides us the tools that are required to build our app.
```
  npm install express
```
# sequelize 
- sequelize is promise based ORM for relational database itb supported mysql2.
``
npm install sequelize2
``
# MySQL 
- Mysql is most popular open-source relational database management system . It is fast , easy to use.
     ```
        sudo apt install mysql-server -y
        sudo mysql -u root -p 
        ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Sudha@1234';
        INFO- password should be strong. Exa:- Sudha@123
    ```

# Nodemon
- nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- nodemon does not require any additional changes to your code or method of development.
    ```
       npm install nodemon --save
    ```
 # what is does:-
 - I creted one table in database by using mysql2  and i gave requirement feild Name , email, uername, phone number password and conform password. first create post with datavalidation, update data by id,  delete data by id and i get all the data
 -    
# i have used
- Database
- sequelize
- Express
- router
- middleware
- port
- Export module
- crud operation
- Arrow function
- async await
- promise
- app.listen
- app.use

# how to run-
   - **server.js** - this is my connection file for running this project you can run this file.
   - **connection.js** - this is my database folder i creted connection file i created table in this file and i stored user data.
   - **routes.js** - this is my router folder i created routes file file and in this i created so many routes with crud operation . so these route will define url path.

  