import { useEffect, useState } from "react";
import type { Person } from "../../types";
import { Student_API } from "../../Api/api.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import StudentCard from "../StudentCard/StudentCard.tsx";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

const StudentBlock = () => {
    const [students, setStudents] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(Student_API)
            .then((res) => res.json())
            .then((data: Person[]) => setStudents(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-white p-4">Loading students...</div>;
    if (students.length === 0) return <div className="text-white p-4">No students found.</div>;

    return (
        <section className="relative max-w-7xl mx-auto py-16 px-6 overflow-hidden">
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

            <h2 className="relative z-10 text-4xl font-bold text-white text-center mb-10">Students</h2>

            <p className="relative z-10 text-xl text-center text-gray-300 max-w-2xl mx-auto mb-12">
                Hogwarts has a diverse group of students, each learning magic, spells, and the art of wizardry.
                Here are some of the talented young witches and wizards currently enrolled in the legendary school.
            </p>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="relative z-10 !flex !items-center"
            >
                {students.map((student) => (
                    <SwiperSlide  className='mt-10' key={student.id}>
                        <StudentCard  student={student} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="text-center mt-12">
                <motion.button
                    onClick={() => navigate('/students')}
                    className="
              w-fit
              mb-2
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
                    View All Students
                </motion.button>
            </div>
        </section>
    );
};

export default StudentBlock;
