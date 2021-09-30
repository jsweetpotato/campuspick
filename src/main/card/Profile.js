import React from 'react';

const Profile = (props) => {
  console.log(props.profile.picture)
  return (
    <div className="profile">
        <div className="container">
          <img src={props.profile.picture} alt="" />
          <span className="nickname">{ props.profile.nickname}</span>
        </div>
        <span className="badge">{ props.profile.badge}</span>
    </div>
  )
}

export { Profile };