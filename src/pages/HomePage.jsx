import Header from "../components/header/Header";
import HomepageContent from "../components/HomepageContent";

function HomePage() {
  return (
    <div className="bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover bg-center h-screen">
      <Header />
      <HomepageContent/>
    </div>
  );
}

export default HomePage;
