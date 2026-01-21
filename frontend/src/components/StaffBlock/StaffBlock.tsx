import { useEffect, useState } from "react";
import type { Person } from "../../types";
import { STAFF_API } from "../../Api/api.ts";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom";

const StaffBlock = () => {
    const [staffList, setStaffList] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(STAFF_API)
            .then((res) => res.json())
            .then((data: Person[]) => setStaffList(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="text-white p-4">Loading staff...</div>;
    }

    if (staffList.length === 0) {
        return <div className="text-white p-4">No staff found.</div>;
    }

    const topStaff = staffList.slice(0, 3);

    return (
        <section className="relative w-full bg-[url('/teacher_bg.jpg')] bg-cover bg-center py-24 aspect-[16/9]">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-10">
                <motion.h2
                    className="text-4xl font-bold text-white mb-12 text-start"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    Our Staff
                </motion.h2>
                <motion.p
                    className="text-xl text-white mb-12 text-start"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    There are 15 dedicated staff members at Hogwarts, all of whom are proudly called professors.
                    Each professor specializes in a single subject, guiding students with expertise and passion in their field of magic.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topStaff.map((staff, index) => (
                        <motion.div
                            key={staff.id}
                            className="flex flex-col items-center text-center  rounded-lg  p-4"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.20 }} // <-- эффект увеличения при наведении
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                        >
                            <img
                                src={staff.image}
                                alt={staff.name}
                                className="w-[200px] h-[250px] object-cover rounded-[5px] mb-4 border-2 border-gray-400 shadow-xl"
                            />
                            <h3 className="text-xl font-semibold text-white">{staff.name}</h3>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.button
                        onClick={() =>  navigate("/teacher_profile")}
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
                        View All Staff
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default StaffBlock;
