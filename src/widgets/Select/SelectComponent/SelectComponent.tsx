import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Option } from "../SelectOptions";
import  ChevronDown  from '../../../shared/assets/icons/chevron-down.svg' 
import './SelectComponent.css'
import { Game, IOption, SelectProps } from "@/shared/assets/types/types";

export const SelectComponent = ({
    options,
    placeholder,
    status = 'default',
    onChange,
  }: SelectProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [typeOptions, setTypeOptions] = useState<IOption[]>([])
  const [selected, setSelected] = useState('')
  const [games, setGames] = useState<Game[]>([])
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gameTypes = options && Array.from(new Map(options.map((item: Game) => [item.gameTypeID, item])).values());
    
    setTypeOptions((prev) => {
      prev = gameTypes && gameTypes.map((item: Game) => {
        return {
          title: item.gameTypeID,
          value: item.gameTypeID,
        }
      })
    
      return [{title: 'all', value:''}, ...prev]
    })
  }, [])

  useEffect(() => {
     console.log(options)
      const filtered = options && options.filter((item: Game) => {
        return item.gameTypeID.includes(selected);
      });
        
      setGames(filtered);
  
  }, [selected]);

  useEffect(() => {
    onChange && onChange(games)
  }, [games])

  const handleOptionClick = (value: IOption['value']) => {
    setIsOpen(false);
    setSelected(value);
  };
  
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <div className="wrapper">
      <span className="selectTitle">Game Type</span>
      <div
        className="selectWrapper"
        ref={rootRef}
        data-is-active={isOpen}
      >
        <div
          className="placeholder"
          data-status={status}
          data-selected={!!selected}
          onClick={handlePlaceHolderClick}
          role='button'
          tabIndex={0}
        >
          {selected || placeholder}
        </div>
        <div className="arrow">
          <ChevronDown />
        </div>
        {isOpen && (
          <ul className="select">
            {typeOptions && typeOptions.map((option: IOption) => (
              <Option
                key={option.value}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
