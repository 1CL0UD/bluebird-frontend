import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    {
      isLiked ? setIsLiked(false) : setIsLiked(true);
    }
  };

  return (
    <div onClick={handleLikeClick}>
      {isLiked ? <BsHeartFill /> : <BsHeart />}
    </div>
  );
};

export default LikeButton;
