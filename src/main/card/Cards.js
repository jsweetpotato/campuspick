import React from "react";
import { Card } from "./Card"
import "../../styles/cards.scss"

const Cards = () => {
  const naturelab = {
    profile: {
      picture: "../../images/flowersbynaked_profile.jpg",
      nickname: "네이쳐랩스",
      badge: "이벤트"
    },
    imgUrl: "../../images/flowersbynaked_event.jpg",
    h3: "<플라워 바이 네이키드> #AK&홍대",
    text: "AK&홍대에서 특별한 미디어 전시 어때요? 기대평을 남겨주시면 추첨을 통해 전시에 초대합니다!"
  }

  const tenMounths = {
   profile: {
      picture: "../../images/TenMonths_profile.jpg",
      nickname: "<10개월의 미래>",
      badge: "이벤트"
    },
    imgUrl: "../../images/TenMonths_event.jpg",
    h3: "영화 <십개월의 미래> 시사회 이벤트",
    text: "<십개월의 미래> 예고편을 보고 기대평을 남겨주시면, 추첨을 통해 시사회에 초대합니다!"
  }
  
  const f20 = {
    profile: {
      picture: "../../images/F20_profile.jpg",
      nickname: "F20",
      badge: "이벤트"
    },
    imgUrl:"../../images/F20_event.jpg",
    h3: "영화 <F20> 예매권 이벤트",
    text: "<F20>의 예고편을 확인하시고 기대평을 남겨주세요. 추첨을 통해 예매권을 드립니다!"
  }
  
  return (
    <section className="cards">
      <Card obj={ naturelab }/>
      <Card obj={ tenMounths }/>
      <Card obj={ f20 }/>
    </section>
  );
}

export default Cards;

