export interface GameCardProps {
  gameID: number | string;
  gameName: string;
}

export interface Game {
  length: number;
  gameID: string;
  gameName: string;
  gameTypeID: string;
  technology: string;
  platform: string;
}

export interface GamesState {
  value: Game[];
}

export interface IOption { 
  title: string; 
  value: string 
}

export interface SearchFormProps {
  gamesArr: Game[],
  onSubmit: (filterdGames: Game[]) => void
}

export interface SelectProps {
  options: Game[];
  placeholder?: string;
  gamesArr?: Game[];
  status?: 'default' | 'invalid';
  onChange?: (selected: Game[]) => void;
  
};

export type OptionProps = {
  option: IOption;
  onClick: (value: IOption['value']) => void;
};

export interface GameListProps {
  games: Game[]
}