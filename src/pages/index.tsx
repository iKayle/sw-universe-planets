import { MainLayout } from "../components/MainLayout";
import { HomeScreen } from "../components/screens/HomeScreen";
import PlanetsProvider from "../context/PlanetsProvider";

const Home = () => {
  return (
    <PlanetsProvider>
      <MainLayout>
        <HomeScreen />
      </MainLayout>
    </PlanetsProvider>
  );
};

export default Home;
