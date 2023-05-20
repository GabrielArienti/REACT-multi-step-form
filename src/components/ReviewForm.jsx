import React from "react";

// Components
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const ReviewForm = () => {
  return (
    <div className="revie-form">
      <div className="form-control score-container">
        {/* Unastified */}
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill />
          <p>Instatisfeitos</p>
        </label>

        {/* Neutral */}
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>

        {/* Satisfied */}
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        {/* Very Satisfied */}
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito!</p>
        </label>
      </div>

      {/*  */}
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Como foi a sua experiência com o produto?"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
