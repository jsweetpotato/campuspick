import React from 'react';
import { Profile } from "./Profile";
import { Contents } from "./Contents";
import img from "../../images/flowersbynaked_event.jpg"

const Card = (props) => {
  console.log(props.obj.profile);
  return (
    <aside className="card">
      <Profile profile={props.obj.profile}/>
      <img src={props.obj.imgUrl} alt="이벤트 이미지"/>
      <Contents contents={props.obj}/>
    </aside>
  );
}


export { Card };

