import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Book } from "../../types";
import { BOOK_API } from "../../Api/api.ts";

const BookList = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

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

                <motion.h1
                    className="text-5xl font-bold text-yellow-400 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Harry Potter Book Collection
                </motion.h1>

                <motion.p
                    className="text-gray-300 text-center max-w-3xl mx-auto mb-12 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Discover the magical world of Harry Potter through its legendary books. Each volume reveals a new adventure, filled with spells, mysteries, and the enchanting life at Hogwarts. Perfect for muggles, witches, and wizards alike!
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book, ) => (
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
                                <div className="mb-4 text-center">
                                    <h2 className="text-2xl font-bold text-yellow-300 mb-1">{book.title}</h2>
                                    <h3 className="text-gray-400 text-sm mb-2 italic">{book.originalTitle}</h3>
                                    <p className="text-gray-300 text-sm mb-1"><strong>Release Date:</strong> {book.releaseDate}</p>
                                    <p className="text-gray-300 text-sm mb-1"><strong>Pages:</strong> {book.pages}</p>
                                </div>
                                <p className="text-gray-200 text-sm mb-4 line-clamp-4">{book.description}</p>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookList;
