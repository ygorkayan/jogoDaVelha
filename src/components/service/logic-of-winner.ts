import { IBordService, typesOfPlays } from './helpers';

export const checkForWinners = (bord: IBordService, currentPlay: typesOfPlays, setWinner: any) => {
  const rows = checkRowsForWinners(bord, currentPlay);
  const columns = checkColumnsForWinners(bord, currentPlay);
  const diagonal = checkDiagonalForWinners(bord, currentPlay);

  const winner = rows || columns || diagonal;

  if (winner) {
    setWinner(currentPlay);
    return true;
  }

  return false;
};

export const checkRowsForWinners = (bord: IBordService, play: typesOfPlays) => {
  const check1 = bord[0][0] === play;
  const check2 = bord[0][1] === play;
  const check3 = bord[0][2] === play;

  const check4 = bord[1][0] === play;
  const check5 = bord[1][1] === play;
  const check6 = bord[1][2] === play;

  const check7 = bord[2][0] === play;
  const check8 = bord[2][1] === play;
  const check9 = bord[2][2] === play;

  const firstRow = check1 && check2 && check3;
  const secondRow = check4 && check5 && check6;
  const thirdRow = check7 && check8 && check9;

  return firstRow || secondRow || thirdRow;
};

export const checkColumnsForWinners = (bord: IBordService, play: typesOfPlays) => {
  const check1 = bord[0][0] === play;
  const check2 = bord[1][0] === play;
  const check3 = bord[2][0] === play;

  const check4 = bord[0][1] === play;
  const check5 = bord[1][1] === play;
  const check6 = bord[2][1] === play;

  const check7 = bord[0][2] === play;
  const check8 = bord[1][2] === play;
  const check9 = bord[2][2] === play;

  const firstColum = check1 && check2 && check3;
  const secondColum = check4 && check5 && check6;
  const thirdColum = check7 && check8 && check9;

  return firstColum || secondColum || thirdColum;
};

export const checkDiagonalForWinners = (bord: IBordService, play: typesOfPlays) => {
  const check1 = bord[0][0] === play;
  const check2 = bord[1][1] === play;
  const check3 = bord[2][2] === play;

  const check4 = bord[0][2] === play;
  const check5 = bord[1][1] === play;
  const check6 = bord[2][0] === play;

  const firstDiagonal = check1 && check2 && check3;
  const secondDiagonal = check4 && check5 && check6;

  return firstDiagonal || secondDiagonal;
};
