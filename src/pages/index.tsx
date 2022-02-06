import { HomeScreen } from "../components/screens/HomeScreen";
import PlanetsProvider from "../context/PlanetsProvider";

const Home = () => {
  return (
    <PlanetsProvider>
      <main className="min-h-screen bg-gradient-to-t from-indigo-900 via-indigo-900 to-black">
        <HomeScreen />
      </main>
    </PlanetsProvider>
  );
};

export default Home;
