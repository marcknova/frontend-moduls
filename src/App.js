import "./App.css";
import { Redirect } from "./components/redirect/Redirect";

function App() {
  return (
    <>
      <Redirect />
    </>
  );
}

export default App;

// http://localhost:3001/api/auth/login
// "correo": "susu@gmail.com",
// "contraseña": "susu123"
// https://codesandbox.io/s/login-flow-w-react-context-api-p9j96?file=/src/App.js
