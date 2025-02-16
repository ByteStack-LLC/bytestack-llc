import Header from "../components/Header";
import { db } from "../../firebase.config";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "requests");
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setUsers(usersArray);
        } else {
          console.log("No data grabbed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
