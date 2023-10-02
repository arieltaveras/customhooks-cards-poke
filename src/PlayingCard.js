import React, { useState } from "react";
import useFlip from "./hooks/useFlip";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isCardUp, flipIsCardUp] = useFlip(true)
  return (
    <img
      src={isCardUp ? front : back}
      alt="playing card"
      onClick={flipIsCardUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
