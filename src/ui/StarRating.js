import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

import Star from "./Star";
import Paragraph from "./Paragraph";

const StyledStarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & div {
    display: flex;
  }
`;

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  onSetRating: PropTypes.func,
};

function StarRating({
  maxRating = 5,
  color = "var(--color-star)",
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating = () => {},
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(newRating) {
    setRating(newRating);
    onSetRating(newRating);
  }

  return (
    <StyledStarRatingContainer>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>

      <Paragraph className="star-rating-text" color={color} size={size}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </Paragraph>
    </StyledStarRatingContainer>
  );
}

export default StarRating;
