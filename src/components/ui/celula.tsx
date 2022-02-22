import styled from 'styled-components';
import { ICelula } from './helpers';
import { typesOfBord } from '../service/helpers';

export const Celula = (props: ICelula) => {
  const { setCurrentPlayer, showCurrentPlayer } = props;

  return <Container onClick={setCurrentPlayer}> {currentPlay[showCurrentPlayer()]} </Container>;
};

const currentPlay: Record<typesOfBord, string> = {
  0: '',
  1: 'O',
  2: 'X',
};

const Container = styled.div`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 240px;
  height: 240px;
  border: 1px solid black;
`;

export default Celula;
