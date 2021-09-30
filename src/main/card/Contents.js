import React from 'react';

const Contents = (props) => {
  return (
      <div className="content">
        <h3>{props.contents.h3}</h3>
        <p> {props.contents.text}</p>
        <a href="/" className="card-btn">자세히 보기</a>
      </div>
  )
}

export { Contents };