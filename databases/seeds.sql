-- Start With 4 Default Departments
INSERT INTO department (dept_name) VALUES ("business operations"), ("accounting"), ("sales"), ('marketing');
-- Start With 4 Roles For Each Department
INSERT INTO role (title, salary, dept_id) VALUES
("CEO", 900000.00, 1),
("CFO", 700000.00, 1),
("COO", 500000.00, 1),
("President", 750000.00, 1),
("Head of Accounting", 150000.00, 2),
("Accounting Manager", 90000.00, 2),
("CPA", 50000.00, 2),
("Accountant Intern", 20000.00, 2),
("Head of Sales", 200000.00, 3),
("Sales Manager", 100000.00, 3),
("Sales Person", 60000.00, 3),
("Sales Intern", 30000.00, 3),
("Head of Marketing", 100000.00, 4),
("Marketing Manager", 80000.00, 4),
("Marketing Specialist", 60000.00, 4),
("Marketing Intern", 25000.00, 4);
-- Start With 1 Employee For Each Role
INSERT INTO employee (first_name, last_name, emp_role_id, manager_id) VALUES
("Bigshot", "Tommy", 1, 1),
("Moneyman", "Jake", 2, 1),
("Operation", "Opie", 3, 1),
("Joe", "Trump", 4, 1),
("Nummy", "Neverson", 5, 2),
("Division", "Dommy", 6, 2),
("Multiply", "Madison", 7, 2),
("Subtraction", "Stephen", 8, 2),
("Peter", "Peopleman", 9, 3),
("Calm", "Kevin", 10, 3),
("Smooth", "Sidney", 11, 3),
("Jessica", "Jabroni", 12, 3),
("Brandon", "Brandy", 13, 4),
("Mavus", "Marketerman", 14, 4),
("Graphic", "Guzman", 15, 4),
("Beginner", "Belvin", 16, 4);
