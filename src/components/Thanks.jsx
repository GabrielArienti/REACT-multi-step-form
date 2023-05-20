import React from "react";
import "./Thanks.css";

// Components
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

// Store data from form
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante. Em breve você receberá um cupom de 10%
        para sua próxima compra!
      </p>
      <p>Para concluir sua avaliação, clique no botão de "Enviar" abaixo.</p>
      <h3>Aqui está o resumo de sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
