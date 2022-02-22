import { IBordService, typesOfBord } from '../service/helpers';

export interface IBordUI {
  bord: IBordService;
  playerWinner: typesOfBord;
  setCurrentPlayer: (x: number, y: number) => () => void;
  showCurrentPlayer: (x: number, y: number) => () => typesOfBord;
}

export interface ICelula {
  setCurrentPlayer: () => void;
  showCurrentPlayer: () => typesOfBord;
}
