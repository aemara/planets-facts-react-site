import Header from './Components/Header';
import PlanetImage from './Components/PlanetImage';
import StructureSurfaceToggle from './Components/StructureSurfaceToggle';
import styled from 'styled-components';
import PlanetDescription  from './Components/PlanetDescription';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 1.5em;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <StructureSurfaceToggle />
      <MainContainer>
        <PlanetImage />
        <PlanetDescription />
      </MainContainer>
    </div>
  );
}

export default App;
