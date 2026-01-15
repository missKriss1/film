import Header from "./containers/Header.tsx";
import PeopleCarousel from "./containers/PeopleCarousel/PeopleCarousel.tsx";
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./containers/CharacterPage/CharacterPage.tsx";

function App() {

  return (
      <>
          <Header />

          <Routes>
              <Route path="/" element={<PeopleCarousel />} />
              <Route path="/character/:id" element={<CharacterPage />} />
          </Routes>
      </>
  )
}

export default App
