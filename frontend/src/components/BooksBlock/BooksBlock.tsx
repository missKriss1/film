import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Book } from "../../types";
import { BOOK_API } from "../../Api/api.ts";
import {useNavigate} from "react-router-dom";

const BooksBlock = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(BOOK_API)
            .then((res) => res.json())
            .then((data: Book[]) => setBooks(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-white p-4">Loading books...</div>;
    if (books.length === 0) return <div className="text-white p-4">No books found.</div>;

    return (
        <section
            className="relative min-h-screen bg-[url('/book_bg.jpg')] bg-cover bg-center text-white"
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">
                {/* Заголовок */}
                <motion.h1
                    className="text-5xl font-bold text-white text-center "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Harry Potter Books
                </motion.h1>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.slice(0,3).map((book) => (
                        <motion.div
                            key={book.number}
                            className="bg-[#1c1f2a] rounded-xl shadow-lg overflow-hidden flex flex-col"
                            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,0,0.5)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={book.cover}
                                alt={book.title}
                                className="w-full h-full object-cover rounded-t-xl"
                            />
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <div className="text-center">
                                    <h4 className="text-xl  text-yellow-300 mb-2">{book.title}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className='text-center'>
                    <motion.button
                        onClick={() => navigate('/books')}
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
                    >
                        Learn More Books
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default BooksBlock;
