import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import { motion } from "framer-motion";

const Cards = () => {
  const cards = [
    {
      id: 1,
      name_on_card: "Adrew Ainsley",
      onhold:"$5,600",
      card_number: "**** **** **** 4578",
      exp: "06/25",
      provider: "visa",
      img: "https://wallpapers.com/images/hd/dark-gradient-6bly12umg2d4psr2.jpg",
    },
    {
      id: 2,
      name_on_card: "Adrew Ainsley",
      onhold:"$15,692",
      card_number: "**** **** **** 4792",
      exp: "02/23",
      provider: "mastercard",
      img: "https://wallpapers.com/images/hd/dark-gradient-6bly12umg2d4psr2.jpg",
    },
    {
      id: 3,
      name_on_card: "Adrew Ainsley",
      onhold:"$2,900",
      card_number: "**** **** **** 5772",
      exp: "02/23",
      provider: "mastercard",
      img: "https://wallpapers.com/images/hd/dark-gradient-6bly12umg2d4psr2.jpg",
    },
  ];
  
  return (
    <>
      <Swiper
      className="w-[290px] sm:w-[330px] h-[170px] sm:h-[194px] text-white rounded-3xl"
          effect="cards"
          modules={[Pagination, EffectCards]}
          grabCursor={true}
      >
        {cards.map((card) => (
          <SwiperSlide className="text-white rounded-3xl" key={card.id} >

                <div className="rounded-3xl relative">
                  <img
                    className="relative object-cover h-48 w-96 rounded-3xl"
                    src={card.img}
                  />

                  <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-semibold text-3xl tracking-widest">
                          {card.onhold}
                        </p>
                      </div>
                        <WifiOutlinedIcon className="h-6 w-6 transform rotate-90"/>
                    </div>
                    <div className="pt-8">
                      <p className="font-medium tracking-more-wider flex">
                        {card.card_number}
                      </p>
                    </div>
                    <div className="pt-3 pr-3">
                      <div className="flex justify-start gap-8">
                        <div className="flex justify-start content-start items-start">
                          <p className="font-semibold  text-md line-clamp-1 flex items-start content-start">{card.name_on_card}</p>
   
                        </div>
                        <div className=" ">
                          <p className="font-medium tracking-wider text-sm">
                            {card.exp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cards;
