import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import CardPeople from "../../components/CardPeople/CardPeople.tsx";
import { useEffect, useState } from "react";
import type { Person } from "../../types";
import { API } from "../../Api/api.ts";
import { useNavigate } from "react-router-dom";

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
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            loop
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            {people.map((person) => (
                <SwiperSlide key={person.id}>
                    <CardPeople
                        {...person}
                        onClick={() => navigate(`/character/${person.id}`)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PeopleCarousel;
