import type { Person } from "../../types";

const CardPeople = ({

                        name,
                        image,
                        house,
                        hogwartsStudent,
                        hogwartsStaff,
                    }: Person) => {
    let ocupation = "";
    if (hogwartsStudent) ocupation = "Student";
    else if (hogwartsStaff) ocupation = "Staff";

    return (
        <div
            className="
    flex flex-col h-[350px]
    bg-gradient-to-b from-[#1c1f2a] to-[#12141f]
    border-2 border-gray-700
    rounded-2xl
    shadow-xl
    p-3
    transition-transform hover:scale-105
  "
        >
            <div className="w-full h-55 overflow-hidden mb-4 rounded-lg">
                <img
                    src={image || "/noImage.jpg"}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <h2 className="text-xl font-bold text-yellow-300 mb-2 text-center">
                {name}
            </h2>

            {house && (
                <p className="text-sm text-gray-200 mb-1 text-center">
                    Faculty: {house}
                </p>
            )}
            {ocupation && (
                <p className="text-sm text-gray-200 text-center">Role: {ocupation}</p>
            )}
        </div>
    );
};

export default CardPeople;
