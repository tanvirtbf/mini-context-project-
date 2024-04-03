import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Mini Context Project</h1>
    </UserContextProvider>
  );
}

export default App;
