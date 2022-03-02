INSERT INTO departments (name)
VALUES 
    ('Leadership'),
    ('Sales'),
    ('Human Resources'),
    ('Technology'),
    ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ('CEO', 1000000.00, 1),
    ('Sales Manager', 100000.00, 2),
    ('Sales Representative', 50000.00, 2),
    ('HR Manager', 75000.00, 3),
    ('HR Generalist', 50000.00, 3),
    ('IT Manager', 100000.00, 4),
    ('Software Engineer', 70000.00, 4),
    ('Customer Service Manager', 50000.00, 5),
    ('CSR', 30000.00, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Zoie', 'Rube', 1, null),
    ('Merrit', 'Hylda', 2, 1),
    ('Sam', 'Smith', 4, 1),
    ('Jenny', 'Luck', 6, 1),
    ('Tim', 'Franklin', 8, 1),
    ('Vanessa', 'Betancourt', 3, 2),
    ('Austin', 'Davis', 3, 2),
    ('Mary', 'Robinson', 3, 2),
    ('Luke', 'OBrien', 3, 2),
    ('Christy', 'Edwina', 5, 3),
    ('Chuck', 'Jones', 5, 3),
    ('Caroline', 'Jordan', 7, 4),
    ('Joel', 'Andrews', 9, 5),
    ('Melisandre', 'Evans', 9, 5),
    ('Rina', 'Schoolcraft', 9, 5);