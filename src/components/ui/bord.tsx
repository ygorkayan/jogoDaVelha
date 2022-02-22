import styled from 'styled-components';
import { IBordUI } from './helpers';
import Celula from './celula';

export const Bord = (props: IBordUI) => {
  const { bord, setCurrentPlayer, showCurrentPlayer } = props;

  const Celulas = [];

  for (let x = 0; x < bord.length; x++) {
    for (let y = 0; y < bord[x].length; y++) {
      const celula = <Celula setCurrentPlayer={setCurrentPlayer(x, y)} showCurrentPlayer={showCurrentPlayer(x, y)} />;
      Celulas.push(celula);
    }
  }

  return <Container>{Celulas}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  height: 720px;
  background-color: gray;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid black;
  cursor: pointer;
`;

export default Bord;
