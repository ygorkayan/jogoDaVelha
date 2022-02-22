import styled from 'styled-components';
import { IPainel, currentPlay } from './helpers';

export const Painel = (props: IPainel) => {
  const { currentPlayer, playerWinner } = props;

  const winner = <Msg>Jogador: {currentPlay[currentPlayer]} Ganhou!!!</Msg>;
  const player = <Msg>E a vez do jogador: {currentPlay[currentPlayer]}</Msg>;

  return <Container>{playerWinner === 0 ? player : winner}</Container>;
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 5px;
  width: 720px;
  height: 100px;
  margin-bottom: 30px;
  background-color: gray;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Msg = styled.p`
  font-size: 40px;
  color: white;
`;

export default Painel;
