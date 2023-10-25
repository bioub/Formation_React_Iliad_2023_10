// import { useState } from "react";

function LikeButtonControlled({ likes, onIncrement }) {
  // const [likes, setLikes] = useState(0);

  function handleClick() {
    onIncrement(likes + 1);
  }

  return (
    <button className="LikeButtonControlled" onClick={handleClick}>
      {likes}
    </button>
  );
}

export default LikeButtonControlled;
