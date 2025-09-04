import Header from "../components/header/Header"

function Technology() {
	return (
		 <div className="bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover bg-center h-screen">
      <Header />
			<p className="text-white">This is technology</p>
    </div>
	)
}

export default Technology
