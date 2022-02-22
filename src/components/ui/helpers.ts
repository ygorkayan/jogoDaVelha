import { IBordService, typesOfBord, typesOfPlays } from '../service/helpers';

export const currentPlay: Record<typesOfBord, string> = {
  0: '',
  1: 'O',
  2: 'X',
};

export interface IApp extends IBordUI {
  currentPlayer: typesOfPlays;
  playerWinner: typesOfBord;
}

export interface IBordUI {
  bord: IBordService;
  setCurrentPlayer: (x: number, y: number) => () => void;
  showCurrentPlayer: (x: number, y: number) => () => typesOfBord;
}

export interface IPainel {
  currentPlayer: typesOfPlays;
  playerWinner: typesOfBord;
}


export interface ICelula {
  setCurrentPlayer: () => void;
  showCurrentPlayer: () => typesOfBord;
}
