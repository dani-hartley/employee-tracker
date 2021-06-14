## Employee Tracker

## Description

A command-line applications using node.js and mysql to create an employee database based on the user's inputs. 

## User Story

> AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria

>GIVEN a command-line application that accepts user input  
WHEN I start the application  
THEN I am presented with the following options: 
    view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role  
WHEN I choose to view all departments  
THEN I am presented with a formatted table showing department names and department ids  
WHEN I choose to view all roles  
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role  
WHEN I choose to view all employees  
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to  
WHEN I choose to add a department  
THEN I am prompted to enter the name of the department and that department is added to the database  
WHEN I choose to add a role  
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database  
WHEN I choose to add an employee  
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database  
WHEN I choose to update an employee role  
THEN I am prompted to select an employee to update and their new role and this information is updated in the database  

## Installation 

1. Clone employee-tracker repository
2. Run <code> npm install</code> to install dependencies
    - Ensure you have the following dependancies
        a. Node.js
        b. Express
        c. inquirer
        d. mysql2
        e. console.table
3. Start Application <code> npm start </code>

## Usage

## Video

*[Video of User Experience](https://drive.google.com/file/d/15cDclWilbazUnZJehvVaLYN9TyfBZ2TT/view)

![Screen Recording of Application](./assets/walkthrough.gif)

### Screenshots

![Application Menu](https://user-images.githubusercontent.com/79660405/121838394-58ff7300-cc9d-11eb-923d-07c8a4cad7ae.png)

![View Dept, Roles, Employees](https://user-images.githubusercontent.com/79660405/121838437-792f3200-cc9d-11eb-93d6-1aab4171827f.png)

![Add Dept, Role, Employee and Update Employee](https://user-images.githubusercontent.com/79660405/121838510-a085ff00-cc9d-11eb-8ddd-064e3456c22c.png)