import { motion } from "framer-motion";
import type { Person } from "../../types";

interface StudentCardProps {
    student: Person;
}

const houseColors: Record<string, string> = {
    Gryffindor: "border-red-500",
    Slytherin: "border-green-500",
    Hufflepuff: "border-yellow-400",
    Ravenclaw: "border-blue-500",
};

const StudentCard = ({ student }: StudentCardProps) => {
    const borderColor = houseColors[student.house] || "border-gray-600";

    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: `0 0 25px rgba(255,255,200,0.5)` }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex flex-col w-full max-w-[300px] rounded-xl overflow-hidden shadow-lg border-1 ${borderColor} bg-[#1c1f2a] mx-auto`}
        >
            <div className="w-full h-64 overflow-hidden">
                <img
                    src={student.image || "/noImage.jpg"}
                    alt={student.name}
                    className="w-full h-full object-cover rounded-t-xl"
                />
            </div>

            <div className="p-4 flex flex-col gap-1 text-white">
                <h2 className="text-xl font-bold mb-1">{student.name}</h2>
                <p className="text-sm text-gray-300 mb-1">
                    <strong>House:</strong> {student.house || "Unknown"}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                    <strong>Gender:</strong> {student.gender}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                    <strong>Student:</strong> {student.hogwartsStudent ? "🧙‍♂️ Yes" : "❌ No"}
                </p>
                <p className="text-sm text-gray-300 mb-1">
                    <strong>Staff:</strong> {student.hogwartsStaff ? "🧙‍♂️ Yes" : "❌ No"}
                </p>
                {student.wand?.wood && (
                    <p className="text-sm text-gray-300 mb-1">
                        <strong>Wand:</strong> {student.wand.wood} / {student.wand.core} / {student.wand.length ? student.wand.length + '"' : "?"}
                    </p>
                )}
                <p className="text-sm text-gray-300 mb-1">
                    <strong>Date of Birth:</strong> {student.dateOfBirth || "Unknown"}
                </p>
            </div>
        </motion.div>
    );
};

export default StudentCard;
