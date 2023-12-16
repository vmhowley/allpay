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
      img: "https://static.vecteezy.com/system/resources/previews/010/742/835/non_2x/paper-cut-style-design-for-branding-advertising-with-abstract-shapes-modern-background-for-covers-invitations-posters-banners-flyers-placards-illustration-free-vector.jpg",
    },
    {
      id: 2,
      name_on_card: "Adrew Ainsley",
      onhold:"$15,692",
      card_number: "**** **** **** 4792",
      exp: "02/23",
      provider: "mastercard",
      img: "https://static.vecteezy.com/system/resources/previews/010/742/835/non_2x/paper-cut-style-design-for-branding-advertising-with-abstract-shapes-modern-background-for-covers-invitations-posters-banners-flyers-placards-illustration-free-vector.jpg",
    },
    {
      id: 3,
      name_on_card: "Adrew Ainsley",
      onhold:"$2,900",
      card_number: "**** **** **** 5772",
      exp: "02/23",
      provider: "mastercard",
      img: "https://static.vecteezy.com/system/resources/previews/010/742/835/non_2x/paper-cut-style-design-for-branding-advertising-with-abstract-shapes-modern-background-for-covers-invitations-posters-banners-flyers-placards-illustration-free-vector.jpg",
    },
  ];
  
  return (
    <>
      <Swiper
      className="w-[290px] sm:w-[330px] h-[170px] sm:h-[194px] text-white "
          effect="cards"
          modules={[Pagination, EffectCards]}
          grabCursor={true}
      >
        {cards.map((card) => (

    <SwiperSlide key={card.id} className="-[380px] h-[180px] bg-primary-500 rounded-[24px] overflow-hidden bg-black ">
      <div className="relative h-[180px] bg-[url(group.png)] bg-[100%_100%] ">
      <img id="imagen" className="h-full w-full" alt="Group" src={card.img} />
        <div className="w-[316px] h-[125px] gap-[12px] absolute top-[28px] left-[32px] flex items-start">
          <div className="flex-col gap-[16px] relative flex-1 grow flex items-start">
            <div className="flex relative self-stretch mt-[-0.38px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-others-white text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
              M-Card
            </div>
            <div className="w-fit font-h4-bold font-[number:var(--h4-bold-font-weight)] text-[length:var(--h4-bold-font-size)] tracking-[var(--h4-bold-letter-spacing)] leading-[var(--h4-bold-line-height)] whitespace-nowrap relative text-others-white [font-style:var(--h4-bold-font-style)]">
              {card.card_number}
            </div>
            <div className="flex items-center gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-[8px] flex-[0_0_auto] flex-col relative">
                <div className="relative ">
                  Card Holder name
                </div>
                <div className="relative font-bold">
                  {card.name_on_card}
                </div>
              </div>
              <div className="flex w-[54px] items-start gap-[8px] flex-col relative">
                <div className="self-stretch font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] relative text-others-white [font-style:var(--body-large-semibold-font-style)]">
                  {card.exp}
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-end justify-between self-stretch flex-[0_0_auto] flex-col relative">
            {/* PROVIDER ICON */}
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
