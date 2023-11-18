import { useAuth } from "../contexts/AuthContext";
import Navbar from "../layouts/Navbar/Navbar";

const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <p>{currentUser?.name}</p>
      </div>
    </div>
  );
};

export default Home;
