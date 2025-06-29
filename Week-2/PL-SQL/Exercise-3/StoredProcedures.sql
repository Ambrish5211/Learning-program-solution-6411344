-- Assignment: Stored Procedures in PL/SQL
-- Student Name: Ambrish Kumar
-- Date: 29-06-2025




-- Create ACCOUNTS table
CREATE TABLE ACCOUNTS (
  AccountID    NUMBER PRIMARY KEY,
  CustomerID   NUMBER,
  AccountType  VARCHAR2(20),
  Balance      NUMBER
);

-- Create EMPLOYEES table
CREATE TABLE EMPLOYEES (
  EmployeeID   NUMBER PRIMARY KEY,
  Name         VARCHAR2(100),
  Department   VARCHAR2(50),
  Salary       NUMBER
);


-- Sample data for ACCOUNTS
INSERT INTO ACCOUNTS VALUES (101, 1, 'savings', 10000);
INSERT INTO ACCOUNTS VALUES (102, 1, 'current', 5000);
INSERT INTO ACCOUNTS VALUES (103, 2, 'savings', 20000);

-- Sample data for EMPLOYEES
INSERT INTO EMPLOYEES VALUES (1, 'John Cena', 'Sales', 50000);
INSERT INTO EMPLOYEES VALUES (2, 'Steven Smith', 'Sales', 55000);
INSERT INTO EMPLOYEES VALUES (3, 'Rohit Sharma', 'HR', 60000);

COMMIT;


-- SCENARIO 1: Process Monthly Interest for Savings Accounts


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE ACCOUNTS
  SET Balance = Balance + (Balance * 0.01)
  WHERE AccountType = 'savings';

  COMMIT;
END;
/

EXEC ProcessMonthlyInterest;


-- SCENARIO 2: Update Employee Bonus by Department


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_department IN VARCHAR2,
  p_bonus_pct  IN NUMBER
) IS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * p_bonus_pct / 100)
  WHERE Department = p_department;

  COMMIT;
END;
/

EXEC UpdateEmployeeBonus('Sales', 10);


-- SCENARIO 3: Transfer Funds Between Accounts


CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_account IN NUMBER,
  p_to_account   IN NUMBER,
  p_amount       IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance
  FROM ACCOUNTS
  WHERE AccountID = p_from_account;

  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
  END IF;

  UPDATE ACCOUNTS
  SET Balance = Balance - p_amount
  WHERE AccountID = p_from_account;

  UPDATE ACCOUNTS
  SET Balance = Balance + p_amount
  WHERE AccountID = p_to_account;

  COMMIT;
END;
/

EXEC TransferFunds(101, 102, 1000);
