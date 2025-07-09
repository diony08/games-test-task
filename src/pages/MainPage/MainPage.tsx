import React, { useEffect, useState } from 'react';
import { allGamesApi } from '@/app/api';

import { GameList } from '@/widgets/GameList';
import { addLoadGame } from '@/entities/Games';
import { useDispatch } from 'react-redux';
import { SearchForm } from '@/widgets';
import { SelectComponent } from '@/widgets/Select';

import './MainPage.css'
import { Game } from '@/shared/assets/types/types';


export const MainPage = () => {
  const { data, error, isLoading } = allGamesApi.useFetchAllGamesDataQuery('');
  const [findedGames, setFindedGames] = useState<Game[] | null>(null);
  const disptach = useDispatch();

  useEffect(() => {
    data && disptach(addLoadGame(data.result))
  }, [data])

  const handleSubmitForm = (filteredGames: Game[]) => {
    setFindedGames(filteredGames)
  }


  const handleGameTypeSelect = (filteredGames: Game[]) => {
    setFindedGames(filteredGames)
  };

  
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <>
      <div className="topMenu">
        {
          data && <SelectComponent options={(data.result)} onChange={handleGameTypeSelect} placeholder='All' /> 
        }
        <SearchForm gamesArr={data.result} onSubmit={handleSubmitForm} />
      </div>
      <span className='title'>pragmatic play</span>
      {
        findedGames && <GameList games={findedGames} />
      }
      {
        !findedGames && <GameList games={data.result} />
      }
    </>
  );
};

