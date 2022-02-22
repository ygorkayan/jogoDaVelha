import { checkForWinners } from './logic-of-winner';

export const setCurrentPlayer =
  (
    bord: IBordService,
    player: typesOfPlays,
    playerWinner: typesOfBord,
    setPlayer: any,
    setBord: any,
    setPlayerWinner: any
  ) =>
  (x: number, y: number) =>
  () => {
    const newBord = bord;
    checkForWinners(newBord, player, setPlayerWinner);

    if (newBord[x][y] === 0 && playerWinner === 0) {
      newBord[x][y] = player;

      if (!checkForWinners(newBord, player, setPlayerWinner)) {
        setBord(newBord);
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  };

export const showCurrentPlayer = (bord: IBordService) => (x: number, y: number) => (): typesOfBord => bord[x][y];

export type IBordService = [
  [typesOfBord, typesOfBord, typesOfBord],
  [typesOfBord, typesOfBord, typesOfBord],
  [typesOfBord, typesOfBord, typesOfBord]
];

export type typesOfPlays = 1 | 2;

export type typesOfBord = 0 | 1 | 2;
