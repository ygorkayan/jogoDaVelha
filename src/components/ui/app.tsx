import Painel from './painel';
import Bord from './bord';
import styled from 'styled-components';

export const App = () => {
  return (
    <Container>
      <Painel />
      <Bord />
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

export default App;
