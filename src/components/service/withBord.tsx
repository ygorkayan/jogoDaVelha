import { ComponentType, useState } from 'react';
import { typesOfPlays, IBordService, setCurrentPlayer, showCurrentPlayer, typesOfBord } from './helpers';
import { IBordUI } from '../ui/helpers';

export const withLoading = (Component: ComponentType<any>) => () => {
  const [player, setPlayer] = useState<typesOfPlays>(1);
  const [playerWinner, setPlayerWinner] = useState<typesOfBord>(0);

  const [bord, setBord] = useState<IBordService>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const props: IBordUI = {
    bord,
    playerWinner,
    setCurrentPlayer: setCurrentPlayer(bord, player, playerWinner, setPlayer, setBord, setPlayerWinner),
    showCurrentPlayer: showCurrentPlayer(bord),
  };

  return <Component {...props} />;
};

export default withLoading;
