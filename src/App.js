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
  align-items: center;
  padding: 0 1.5em;
`;

const determineScreenSize = () => {
  if (window.innerWidth < 768) {
    return "mobile";
  } else if (window.innerWidth > 768 && window.innerWidth < 1000) {
    return "tablet";
  } else {
    return "desktop";
  }
};

function App() {
  const [planet, setPlanet] = useState('Mercury');
  const [aspect, setAspect] = useState('overview');
  const [planetData, setPlanetData] = useState(data[0]);
  const [screenSize, setScreenSize] = useState(determineScreenSize());


  const changePlanet = (planet) => {
    setPlanet(planet);
  }

  const changeAspect = (aspect) => {
    setAspect(aspect);
  }

  const renderApp = () => {
    if (screenSize === "mobile") {
      return (
        <div className="App">
          <Header
            planet={planet}
            changePlanet={changePlanet}
            screenSize={screenSize}
          />
          <StructureSurfaceToggle
            aspect={aspect}
            changeAspect={changeAspect}
            screenSize={screenSize}
          />
          <MainContainer>
            <PlanetImage planetData={planetData} aspect={aspect} />
            <PlanetDescription planetData={planetData} aspect={aspect} />
            <QuantativeInfo planetData={planetData} />
          </MainContainer>
        </div>
      );
    } else if (screenSize === "tablet") {
      return (
        <div className="App">
          <Header
            planet={planet}
            changePlanet={changePlanet}
            screenSize={screenSize}
          />
          <MainContainer>
            <PlanetImage planetData={planetData} aspect={aspect} />
            <PlanetDescription planetData={planetData} aspect={aspect} />
            <StructureSurfaceToggle
              aspect={aspect}
              changeAspect={changeAspect}
              screenSize={screenSize}
            />
            <QuantativeInfo planetData={planetData} />
          </MainContainer>
        </div>
      );
    }
  };

  
  const handleResizing = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth > 768 && window.innerWidth < 1000) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    })
  }

   useEffect(() => {
    data.forEach((planetObject) => {
      if(planetObject.name === planet) {
        setPlanetData(planetObject)
      }
    })
    
  }, [planet])

  useEffect(() => {
    handleResizing();
  }, [])

  return (
    renderApp()
  )
}

export default App;
