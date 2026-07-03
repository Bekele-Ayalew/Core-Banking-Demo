# Core Banking System (CBS)

## 🏦 Core Banking System (Demo Project)

A **Core Banking System** built using **ASP.NET Core MVC**, **Entity Framework Core**, **SQL Server**, **SignalR**, and **Object-Oriented Programming (OOP)** principles.

This project demonstrates enterprise-level architecture, layered design, CRUD operations, real-time notifications, and clean software engineering practices.

---

## ✨ Features

### 📊 Dashboard
- Live statistics
- Customer count
- Account count
- Total balance overview
- Recent transactions
- Quick actions

---

### 👤 Customer Management
- Add new customers
- View customer list
- Active/inactive status
- Database integration

---

### 🏦 Account Management
- Create Savings / Current accounts
- Customer-account mapping
- Initial balance setup
- Account status management

---

### 💸 Fund Transfer
- Transfer money between accounts
- Balance validation
- Automatic balance updates
- Transfer history tracking

---

### 🔄 Transaction Management
- Deposit
- Withdrawal
- Transfer In / Out
- Transaction history tracking

---

### 🏠 Loan Management
- Apply for loans
- Interest calculation
- Monthly installment computation
- Loan status tracking
- Loan categories

---

### 💳 Card Management
- Issue debit cards
- Issue credit cards
- Card limits management
- Card status tracking
- Expiry handling

---

### 📈 Reports
- Financial summary
- Customer reports
- Transaction reports
- Account reports

---

### ⚙️ Settings
- Bank configuration
- Security settings
- Transaction rules

---

### 🔔 Real-Time Notifications
- SignalR integration
- Live transaction notifications

---

## 🛠 Technologies Used

- ASP.NET Core MVC
- C#
- Entity Framework Core
- SQL Server
- LINQ
- Bootstrap 5
- HTML5
- CSS3
- JavaScript
- SignalR
- Dependency Injection

---

## 📂 Project Architecture
Controllers
│
├── HomeController

Services
│
├── IFrontendService
└── FrontendService

Models
│
├── Customer
├── Account
├── Transaction
├── Loan
├── Card
└── OOP
├── BankAccount
├── SavingsAccount
└── CurrentAccount

Data
│
└── AppDbContext

Hubs
│
└── NotificationHub

Views
│
└── Home



---

## 💻 OOP Concepts Applied

### Encapsulation
```csharp
private decimal Balance;

public decimal GetBalance()
{
    return Balance;
}

Inheritance

BankAccount
    │
    ├── SavingsAccount
    └── CurrentAccount



    Abstraction
public abstract class BankAccount
{
    public abstract bool Withdraw(decimal amount);
}


Polymorphism
BankAccount account;

if(type == "Savings")
    account = new SavingsAccount();
else
    account = new CurrentAccount();

account.Transfer(...);



🔔 Real-Time System

SignalR is used to broadcast live notifications whenever transactions occur without page refresh.

📊 Database

SQL Server database includes:

Customers
Accounts
Transactions
Loans
Cards
Users
✨ Key Highlights
Clean Architecture
Layered Design
Dependency Injection
Entity Framework Core
LINQ Queries
CRUD Operations
Modal Forms
Real-Time Notifications
Responsive UI
📸 Screenshot
<img width="1536" height="1024" alt="Dashboard" src="https://github.com/user-attachments/assets/3ecc39d8-3224-4cfb-99a8-9e44123bcf6a" />
⚙️ Setup Instructions
git clone https://github.com/Bekele-Ayalew/Core-Banking-Demo.git
cd Core-Banking-Demo
dotnet restore
dotnet run
📈 Future Improvements
Authentication & Authorization (JWT / Identity)
Email Notifications
PDF Reports
Role-based Access Control
Account Statements
Interest Automation
ATM Simulation
Mobile Banking API
👨‍💻 Developer

Bekele Ayalew

ASP.NET Core Developer
GitHub: https://github.com/Bekele-Ayalew



⭐ If you find this project useful, consider giving it a star.
