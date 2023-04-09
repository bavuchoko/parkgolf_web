import './index.css';
import {Outlet} from "react-router-dom";
import {fetchIsLoggedIn} from "./apis/auth/AuthService";

function App() {

  return (
      <div className="App">
            <Outlet/>
      </div>
  );
}

export default App;