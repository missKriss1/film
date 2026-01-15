import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import CardPeople from "../../components/CardPeople/CardPeople.tsx";
import { useEffect, useState } from "react";
import type { Person } from "../../types";
import { API } from "../../Api/api.ts";

const PeopleCarousel = () => {
    const [people, setPeople] = useState<Person[]>([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setPeople(data))
            .catch((error) => console.error("Ошибка:", error));
    }, []);

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            direction="horizontal"
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="!flex !items-center"
        >
            {people.map((person) => (
                <SwiperSlide key={person.id}>
                    <CardPeople {...person} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PeopleCarousel;
