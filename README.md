# React + Redux Toolkit Counter App

A simple yet comprehensive counter application built with React and Redux Toolkit. This project serves as a hands-on guide to understanding the core concepts of modern Redux, including creating a store, defining slices with reducers, and connecting React components to the state using hooks.

<p align="center"> 
  <img width="982" height="822" alt="Counter App Screenshot" src="https://github.com/user-attachments/assets/3ac2da46-f403-426c-8039-fdd1a8ec5966" /> 
</p>


## ✨ Features

-   **Increment:** Increase the counter value by one.
-   **Decrement:** Decrease the counter value by one.
-   **Reset:** Reset the counter to its initial state (0).
-   **Increment by Amount:** Increase the counter by a user-specified value.
-   **Decrement by Amount:** Decrease the counter by a user-specified value.

## 🛠️ Tech Stack

- **React** – A JavaScript library for building user interfaces.
- **Redux Toolkit** – The official, opinionated, batteries-included toolset for efficient Redux development.
- **React-Redux** – Official React bindings for Redux.
- **Tailwind CSS** – A utility-first CSS framework for rapid UI development.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Mr-Explorer142/Learning-React-Redux-Toolkit.git](https://github.com/Mr-Explorer142/Learning-React-Redux-Toolkit.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Learning-React-Redux-Toolkit
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---

## ⚙️ Core Concepts & Workflow

This project demonstrates a complete workflow for integrating Redux Toolkit into a React application.

### 1. Creating the Redux Store
The global state is managed in a single **store**, created using `configureStore` from `@reduxjs/toolkit`. It combines all feature-specific reducers.

### 2. Providing the Store to React
The `<Provider>` component from `react-redux` wraps the root `<App />` component, making the store available to the entire application.

### 3. Creating a Feature Slice (`counterSlice`)
The `createSlice` function organizes the state logic for a feature. It auto-generates action creators and includes:
-   **Initial State:** The starting state for the slice.
-   **Reducers:** Functions that define how the state can be updated (`increment`, `decrement`, `reset`, etc.).

### 4. Building the UI & Interaction
The UI is built with React components and styled with **Tailwind CSS**. Buttons dispatch actions via `onClick` handlers.

### 5. Connecting Components with Hooks
- **`useSelector`**: Reads data from the store.
- **`useDispatch`**: Sends actions to the store to trigger state updates.
- **`useRef`**: Manages the input field without causing unnecessary re-renders.
