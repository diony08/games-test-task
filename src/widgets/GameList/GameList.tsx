import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { GameCard } from '@/entities/GameCard';
import './GameList.css'
import { Game, GameListProps } from '@/shared/assets/types/types';

export const GameList = ({ games }: GameListProps) => {
  const [visibleCount, setVisibleCount] = useState(30);
  const [intersecting, setIntersecting] = useState<boolean>(true);
  const elemRef = useRef<HTMLDivElement | null>(null);

  
  const observerOptions = {
      root: null,
      rootMargin: '10px 0px 0px 0px',
      threshold: 0.2
    };

  useEffect(() => {
  
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (games && games.length > visibleCount) {
          setVisibleCount((prev) => {
            return prev += 30});
        }
      } else {
        setIntersecting(false);
      }
    }, observerOptions);

    if (elemRef.current !== null) {
      observer.observe(elemRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <div className="gameList">
        {games && games.slice(0, visibleCount).map((game: Game) => (
          <GameCard key={game.gameID} gameID={game.gameID} gameName={game.gameName} />
        ))}
      </div>
      <div ref={elemRef} style={{ height: '10px' }} />
    </>
  );
};
