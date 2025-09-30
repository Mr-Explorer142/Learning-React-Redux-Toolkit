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

##  How to Run the Project
1. **Clone the repository**
2. **Navigate to project folder**
3. **Install dependencies**
4. **Start development server**

```bash
git clone https://github.com/Mr-Explorer142/Learning-React-Redux-Toolkit.git
cd Learning-React-Redux-Toolkit
npm install
npm run dev
```

## Tech Stack
-**React** – Frontend library for building UI
-**Redux Toolkit** – Simplified Redux state management
-**React-Redux** – Connects React to Redux
- **Tailwind CSS** – Utility-first CSS framework for styling 
