import React, { FormEvent, useEffect, useState } from "react";
import Glass from '../../shared/assets/icons/glass.svg'
import './SearchForm.css'
import { Game, SearchFormProps } from "@/shared/assets/types/types";

export const SearchForm = ({gamesArr, onSubmit}: SearchFormProps) => {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    if (gamesArr) {
      const filtered = gamesArr.filter((item: Game) => {
        return item.gameName.includes(search);
      });
      
      setGames(filtered);
    }

  }, [search]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    onSubmit && onSubmit(games)
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <label htmlFor="gameSearch">Search</label>
      <div className="form-wrapper">
        <div className="inputWrap">
          <Glass />
          <input id="gameSearch" className="searchInput" type="text" placeholder="search" onChange={handleChangeInput}/>
        </div>
        <button className="searchButton" type="submit">search</button>
      </div>
    </form>
  )
}