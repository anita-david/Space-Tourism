import Header from "../components/header/Header";

function Technology() {
  return (
    <div className="bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')] bg-cover bg-center h-screen">
      <Header />
      <p className="text-white">This is technology</p>
    </div>
  );
}

export default Technology;
