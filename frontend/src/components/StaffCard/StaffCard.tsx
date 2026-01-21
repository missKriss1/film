import { motion } from "framer-motion";
import type { Person } from "../../types";

interface StaffCardProps {
    staff: Person;
}

const StaffCard = ({ staff }: StaffCardProps) => {
    return (
        <motion.div
            className="w-full bg-gradient-to-br from-[#1a1c29] to-[#10121a] rounded-2xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="md:w-1/4 flex justify-center relative">
                <img
                    src={staff.image || "/placeholder.jpg"}
                    alt={staff.name}
                    className="w-full max-w-[220px] h-[300px] object-cover rounded-lg shadow-lg border-2 border-yellow-400"
                />
            </div>

            <div className="md:w-3/4 text-white space-y-3">
                <h2 className="text-2xl font-bold text-yellow-400">{staff.name}</h2>
                {staff.house && <p className="text-gray-300"><strong>House:</strong> {staff.house}</p>}
                {staff.wand?.wood && (
                    <p className="text-gray-300">
                        <strong>Wand:</strong> {staff.wand.wood}, {staff.wand.core}, {staff.wand.length ?? "?"} inches
                    </p>
                )}
                {staff.patronus && <p className="text-gray-300"><strong>Patronus:</strong> {staff.patronus}</p>}
                <p className="text-gray-400 mt-2">
                    Hogwarts professors are masters of their subjects, guiding young witches and wizards with knowledge, skill, and a touch of magic.
                </p>
            </div>
        </motion.div>
    );
};

export default StaffCard;
