import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import CardPeople from "../../components/CardPeople/CardPeople.tsx";
import { useEffect, useState } from "react";
import type { Person } from "../../types";
import { API } from "../../Api/api.ts";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

const PeopleCarousel = () => {
    const [people, setPeople] = useState<Person[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then(setPeople)
            .catch(console.error);
    }, []);

    return (
        <section
            className="relative min-h-[400px] bg-[url('/ch_bg.jpg')] bg-cover bg-center   aspect-[16/9]  flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

                <motion.h2
                    className="text-4xl font-bold mb-6 text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hogwarts Characters
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-200 mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Step into the magical world of Hogwarts and meet the students, teachers, and legendary wizards who bring this enchanted school to life. From brave Gryffindors to cunning Slytherins, wise professors, and mysterious figures, each character has a story filled with magic, adventure, and unforgettable moments. Discover their secrets, spells, and journeys through the halls of Hogwarts.
                </motion.p>


                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                        1536: { slidesPerView: 6 },
                    }}
                >
                    {people.map((person) => (
                        <SwiperSlide key={person.id} className='mt-4 mb-5'>
                            <CardPeople
                                {...person}
                                onClick={() => navigate(`/character/${person.id}`)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PeopleCarousel;
