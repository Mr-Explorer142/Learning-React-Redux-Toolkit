### 🔹What I learned - (Complete Workflow)

## 1. Creating a **store**
- Import `configureStore` from `@reduxjs/toolkit`
- Combine slices into the store

## 2. Wrapping the **`<App />`** component with **`<Provider />`**
- Import `Provider` from `react-redux`
- Pass the store as a prop

## 3. Creating a feature named **`counterSlice`**
- Use `createSlice` to define initial state
- Add reducers (`increment`, `decrement`, `reset`, etc.)
- Export actions & reducer

## 4. Defining **state and actions**
- State name: `counter`
- Actions:  
  - `increment`  
  - `decrement`  
  - `reset`  
  - `incrementByAmount`  
  - `decrementByAmount`

## 5. Designing the **UI**
- Create buttons for each action
- Style with **Tailwind CSS**

## 6. Making the app **functional with hooks**
- `useSelector` → to read data from store
- `useDispatch` → to send actions to store
- `useRef` → to handle input without re-renders

---

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


## 🛠️ Tech Stack
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="20" height="20"/> **React** – A JavaScript library for building user interfaces.
- <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg" alt="Redux" width="20" height="20"/> **Redux Toolkit** – The official, opinionated, batteries-included toolset for efficient Redux development.
- <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg" alt="React-Redux" width="20" height="20"/> **React-Redux** – Official React bindings for Redux.
- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" width="20" height="20"/> **Tailwind CSS** – A utility-first CSS framework for rapid UI development.
