import { useEffect, useState } from "react";
import AllUserAPI from "../components/AllUserAPI";

export default function AllUser() {
  const [userList, setUserList] = useState([]);

  const getUsers = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/`)
      .then((resp) => resp.json())
      .then((data) => setUserList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="user-be-container">
      <h1 className="user-title">Gerer les utilisateurs </h1>
      <div className="user-container">
        {userList.map((user) => (
          <AllUserAPI {...user} key={`user-${user.id}`} />
        ))}
      </div>
    </section>
  );
}
