import Header from "./containers/Header.tsx";
import PeopleCarousel from "./containers/PeopleCarousel/PeopleCarousel.tsx";

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
        <div>
            <PeopleCarousel/>
        </div>
    </>
  )
}

export default App
