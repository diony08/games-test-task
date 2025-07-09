import React, { useEffect } from "react";

import './GameCard.css'
import { GameCardProps } from "@/shared/assets/types/types";


export const GameCard = ({ gameID, gameName }: GameCardProps) => {

  return (
    <>
      <div className="card">
        <div className="cardImg">
          <img src={` https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`} alt={gameName} />
        </div>
        <span className="cardName">{gameName}</span>
      </div>
    </>
  )
}