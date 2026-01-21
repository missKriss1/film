import { useEffect, useState } from "react";
import type { Person } from "../../types";
import { STAFF_API } from "../../Api/api";
import StaffCard from "../../components/StaffCard/StaffCard";
import { motion } from "framer-motion";

const StaffList = () => {
    const [staffList, setStaffList] = useState<Person[]>([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(STAFF_API)
            .then((res) => res.json())
            .then((data: Person[]) => setStaffList(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="text-white p-4">Loading staff...</div>;
    if (staffList.length === 0) return <div className="text-white p-4">No staff found.</div>;

    const topStaff = staffList.slice(0, visibleCount);

    return (
        <div className="bg-[#0f1117] min-h-screen p-6 flex flex-col gap-6 relative overflow-hidden">
            <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
                Hogwarts Professors
            </h1>

            <div className="flex flex-col gap-6">
                {topStaff.map((staff) => (
                    <motion.div
                        key={staff.id}
                        whileHover={{ scale: 1, boxShadow: "0 0 20px rgba(255,255,0,0.6)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <StaffCard staff={staff} />
                    </motion.div>
                ))}
            </div>

            {visibleCount < staffList.length && (
                <button
                    onClick={() => setVisibleCount(visibleCount + 3)}
                    className="mt-6 mx-auto px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:shadow-xl transition"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default StaffList;
