import Header from "./containers/Header.tsx";
import PeopleCarousel from "./containers/PeopleCarousel/PeopleCarousel.tsx";
import {Route, Routes} from "react-router-dom";
import CharacterPage from "./containers/CharacterPage/CharacterPage.tsx";
import BookList from "./containers/BookList/BookList.tsx";
import HistoryBlock from "./components/HistoryBlock/HistoryBlock.tsx";
import HistoryPage from "./containers/HistoryPage/HistoryPage.tsx";
import StaffBlock from "./components/StaffBlock/StaffBlock.tsx";
import StaffList from "./containers/StaffList/StaffList.tsx";
import StudentBlock from "./components/StudentBlock/StudentBlock.tsx";
import Studentlist from "./containers/StudentList/StudentList.tsx";
import SpellBlock from "./components/SpellBlock/SpellBlock.tsx";
import SpellList from "./containers/SpellList/SpellList.tsx";
import BooksBlock from "./components/BooksBlock/BooksBlock.tsx";
import Footer from "./containers/Footer.tsx";


function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HistoryBlock />
                            <StaffBlock />
                            <StudentBlock />
                            <SpellBlock />
                            <BooksBlock />
                            <PeopleCarousel />
                        </>
                    }
                />

                <Route path="/history_hogwarts" element={<HistoryPage />} />
                <Route path="/character/:id" element={<CharacterPage />} />
                <Route path="/teacher_profile" element={<StaffList />} />
                <Route path="/students" element={<Studentlist />} />
                <Route path="/spells" element={<SpellList />} />
                <Route path="/books" element={<BookList />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
