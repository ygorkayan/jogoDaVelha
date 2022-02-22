import styled from 'styled-components';
import withBord from '../service/withApp';
import { IApp } from './helpers';
import Painel from './painel';
import Bord from './bord';

export const App = (props: IApp) => {
  const { bord, playerWinner, currentPlayer, setCurrentPlayer, showCurrentPlayer } = props;

  return (
    <Container>
      <Painel playerWinner={playerWinner} currentPlayer={currentPlayer} />
      <Bord bord={bord} setCurrentPlayer={setCurrentPlayer} showCurrentPlayer={showCurrentPlayer} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  height: 95vh;
`;

export default withBord(App);
