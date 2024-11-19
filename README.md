# Invoice Generator

The Invoice Generator is a React-based web application that allows users to create and preview invoices. The app provides an intuitive user interface for managing biller details, client details, invoice items, and notes. Users can dynamically add or remove items and calculate the total amount in real time.

---

## Features

- **Dynamic Input Forms**: Add and manage biller, client, and invoice details.
- **Itemized Invoice**: Add, edit, and delete items dynamically, with automatic total calculation.
- **Invoice Preview**: Switch between editing mode and a preview of the final invoice.
- **Print Invoice**: Easily print invoices using the built-in browser print functionality.
- **Responsive Design**: Optimized for desktop and mobile views.

---

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **JavaScript Features**: React Hooks (`useState`) for state management.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A package manager like npm or yarn.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/invoice-generator.git
   cd invoice-generator
   ```
2. Install dependencies:
    ```bash
    npm install
    ```   
3. Start the development server:
     ```bash
     npm start
     ```
4. Open browser and navigate to http://localhost:3000.

---
## Folder Structure

```bash
src/
├── components/
│   ├── ClientDetails.js
│   ├── Dates.js
│   ├── Footer.js
│   ├── Header.js
│   ├── MainDetails.js
│   ├── Notes.js
│   └── Table.js
├── App.js
├── index.js
└── styles.css

```
---

## How to Use

1. `Fill in Biller and Client Details`: Enter your name, address, email, and phone number for the biller, and the client's name and address for the recipient.

2. `Add Invoice Items`: Add items with descriptions, quantities, and prices. The app calculates the total amount automatically.

3. `Preview Invoice`: Click the Preview Invoice button to see the final invoice layout.

4. `Print Invoice`: Use the Print Invoice button in preview mode to print the invoice.

5. `Edit Details`: Switch back to editing mode to make changes.

---








