import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Person } from "../../types";
import { Student_API } from "../../Api/api";
import StudentCard from "../../components/StudentCard/StudentCard.tsx";

const ITEMS_PER_PAGE = 6;

const StudentList = () => {
    const [students, setStudents] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(Student_API)
            .then((res) => res.json())
            .then((data: Person[]) => setStudents(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-white p-4">Loading students...</div>;
    if (students.length === 0) return <div className="text-white p-4">No students found.</div>;

    const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
    const displayedStudents = students.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // функция для отображения номеров страниц с "..."
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, "...", totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return pages;
    };

    return (
        <section className="relative min-h-screen py-16 px-6 overflow-hidden">

            {/* магические точки */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-yellow-400 rounded-full w-1 h-1"
                    initial={{ opacity: 0, y: -50, x: Math.random() * window.innerWidth }}
                    animate={{ opacity: [0, 1, 0], y: [0, 100, 0], x: Math.random() * window.innerWidth }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 4 + Math.random() * 3,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-5xl font-bold text-yellow-400 text-center mb-6"
            >
                Hogwarts Students
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 text-center text-gray-300 max-w-3xl mx-auto mb-12"
            >
                Welcome to the magical world of Hogwarts! Here you will meet some of the brightest young witches and wizards, learning spells, potions, and all the secrets of wizardry.
            </motion.p>

            {/* Список студентов */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedStudents.map((student) => (
                    <motion.div
                        key={student.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <StudentCard student={student} />
                    </motion.div>
                ))}
            </div>

            {/* Пагинация */}
            <div className="relative z-10 flex justify-center gap-2 mt-12 text-white select-none">
                <button
                    className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>

                {getPageNumbers().map((p, idx) =>
                    typeof p === "number" ? (
                        <button
                            key={idx}
                            className={`px-3 py-1 rounded hover:bg-gray-600 ${
                                p === currentPage ? "bg-yellow-400 text-black" : "bg-gray-700"
                            }`}
                            onClick={() => setCurrentPage(p)}
                        >
                            {p}
                        </button>
                    ) : (
                        <span key={idx} className="px-2">...</span>
                    )
                )}

                <button
                    className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default StudentList;
