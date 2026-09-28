import { useEffect, useState } from "react";
import "./styles.css";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CreateEditUserModal from "./components/CreateEditUserModal";

function App() {
  const [userModal, setUserModal] = useState(false);
  const [users, setUsers] = useState([]);

  const baseUrl = "http://localhost:3030/jsonstore";
  return (
    <>
      <Main />
      <button className="btn-add btn" onClick={showUserHandler}>
        Add new user
      </button>
      {userModal && (
        <CreateEditUserModal
          submitHandler={submitUserModal}
          cancelHandler={cancelUserModal}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
