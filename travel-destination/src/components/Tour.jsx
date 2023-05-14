import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, SetReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => SetReadMore(!readMore)}>
            {readMore ? "隐藏内容" : "了解更多"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-bin">
          不感兴趣
        </button>
      </footer>
    </article>
  );
};

export default Tour;
