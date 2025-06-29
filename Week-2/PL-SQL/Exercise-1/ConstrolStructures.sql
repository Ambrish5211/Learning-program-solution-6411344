-- Assignment: Control Structures in PL/SQL
-- Name: Ambrish Kumar
-- Date: 28-06-2025

-- Create Tables

CREATE TABLE CUSTOMERS (
  CustomerID   NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(100),
  Age          NUMBER,
  Balance      NUMBER,
  IsVIP        VARCHAR2(5)
);

CREATE TABLE LOANS (
  LoanID       NUMBER PRIMARY KEY,
  CustomerID   NUMBER,
  InterestRate NUMBER,
  DueDate      DATE,
  FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS(CustomerID)
);


-- STEP 2: Insert Sample Data

INSERT INTO CUSTOMERS VALUES (1, 'Ambrish Kumar', 65, 15000, 'FALSE');
INSERT INTO CUSTOMERS VALUES (2, 'Steve Smith', 45, 8000, 'FALSE');
INSERT INTO CUSTOMERS VALUES (3, 'Rohit Sharma', 70, 20000, 'FALSE');

INSERT INTO LOANS VALUES (101, 1, 10, SYSDATE + 10);
INSERT INTO LOANS VALUES (102, 2, 9, SYSDATE + 40);
INSERT INTO LOANS VALUES (103, 3, 8, SYSDATE + 20);

COMMIT;


-- Scenario 1: Apply 1% Interest Discount for Age > 60

BEGIN
  FOR cust IN (SELECT CustomerID FROM CUSTOMERS WHERE Age > 60) LOOP
    UPDATE LOANS
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 2: Set VIP Flag for Balance > 10000

BEGIN
  FOR cust IN (SELECT CustomerID FROM CUSTOMERS WHERE Balance > 10000) LOOP
    UPDATE CUSTOMERS
    SET IsVIP = 'TRUE'
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  COMMIT;
END;
/


-- Scenario 3: Remind for Loans Due in 30 Days

BEGIN
  FOR loan IN (
    SELECT l.LoanID, l.DueDate, c.CustomerName
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID || 
                         ' for customer ' || loan.CustomerName || 
                         ' is due on ' || TO_CHAR(loan.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/
