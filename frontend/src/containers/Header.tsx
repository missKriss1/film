import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {useState} from "react";

const navLinks = [
    { name: "History", path: "/history_hogwarts" },
    { name: "Professors", path: "/teacher_profile" },
    { name: "Students", path: "/students" },
    { name: "Spells", path: "/spells" },
    { name: "Books", path: "/books" },
];

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <motion.header
            animate={{
                height: isHome ? "100vh" : "100px",
                backgroundColor: isHome ? "transparent" : " rgb(0, 0, 27)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative w-full z-50 text-white overflow-hidden"
        >
            {isHome && (
                <>
                    <div className="absolute inset-0 bg-[url('/header-bg.webp')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-black/60 pointer-events-none " />
                </>
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-[90px] flex items-center justify-between">
                <NavLink to="/">
                    <motion.img
                        src="/logoH.png"
                        alt="Hogwarts Logo"
                        animate={{ width: isHome ? 128 : 80, paddingTop: isHome ? 40 : 0 }}
                        transition={{ duration: 0.3 }}

                    />
                </NavLink>

                <nav>
                    <ul className="flex gap-8 text-lg font-medium">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `transition hover:text-yellow-400 ${
                                            isActive
                                                ? "text-yellow-400 underline underline-offset-4"
                                                : ""
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {isHome && (
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 pb-20">
                    <motion.img
                        src="/hogwarts.gif"
                        className="w-full max-w-md mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />

                    <motion.h1
                        className="text-5xl font-bold text-center mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        School of Witchcraft and Wizardry
                    </motion.h1>

                    <motion.button
                        className="
              w-fit
              px-16
              py-3
              bg-yellow-400
              text-black
              font-semibold
              rounded-lg
              shadow-lg
            "
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(255, 255, 0, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}

                    >
                        Apply now
                    </motion.button>
                </div>
            )}

            {isModalOpen && (
                <motion.div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#0f1117] rounded-2xl p-8 w-full max-w-lg shadow-2xl text-white relative"
                    >
                        {/* Кнопка закрытия */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                        >
                            ✕
                        </button>

                        {/* Заголовок + описание */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-3 text-white">
                                Hogwarts Application
                            </h2>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Submit your application to join the legendary Hogwarts School of
                                Witchcraft and Wizardry. Fill out the form below and start your
                                magical journey.
                            </p>
                        </div>

                        {/* FORM */}
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <select
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                <option>Select Your House</option>
                                <option>Gryffindor</option>
                                <option>Slytherin</option>
                                <option>Hufflepuff</option>
                                <option>Ravenclaw</option>
                            </select>

                            <textarea
                                rows={4}
                                placeholder="Why do you want to join Hogwarts?"
                                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />

                            <button
                                type="submit"
                                className="mt-4 px-10 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:shadow-xl transition"
                            >
                                Submit Application
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}

        </motion.header>
    );
};

export default Header;
