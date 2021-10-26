import Header from './Components/Header';
import PlanetImage from './Components/PlanetImage';
import StructureSurfaceToggle from './Components/StructureSurfaceToggle';
import styled from 'styled-components';
import PlanetDescription  from './Components/PlanetDescription';
import QuantativeInfo from './Components/QuantativeInfo';
import data from './data.json';
import { useState ,useEffect} from 'react';


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 1.5em;
`;

function App() {
  const [planet, setPlanet] = useState('Mercury');
  const [aspect, setAspect] = useState('overview');
  const [planetData, setPlanetData] = useState(data[0]);

  const changePlanet = (planet) => {
    setPlanet(planet);
  }

  const changeAspect = (aspect) => {
    setAspect(aspect);
  }

   useEffect(() => {
    data.forEach((planetObject) => {
      if(planetObject.name === planet) {
        setPlanetData(planetObject)
      }
    })
    
  }, [planet])

  return (
    <div className="App">
      <Header planet={planet} changePlanet={changePlanet} />
      <StructureSurfaceToggle aspect={aspect} changeAspect={changeAspect} />
      <MainContainer>
        <PlanetImage planetData={planetData} aspect={aspect} />
        <PlanetDescription planetData={planetData} aspect={aspect} />
        <QuantativeInfo planetData={planetData} />
      </MainContainer>
    </div>
  );
}

export default App;
