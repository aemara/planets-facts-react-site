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
  padding: 0 ${({screenSize}) => screenSize === 'tablet' ? '2.5em' : '1.5em'};
  margin-bottom: 3em;
`;

const DescriptionToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

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
  const [planet, setPlanet] = useState('mercury');
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
            planet={planet}
          />
          <MainContainer>
            <PlanetImage planetData={planetData} aspect={aspect} />
            <PlanetDescription
              planetData={planetData}
              aspect={aspect}
              screenSize={screenSize}
            />
            <QuantativeInfo planetData={planetData} screenSize={screenSize} />
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
          <MainContainer screenSize={screenSize}>
            <PlanetImage planetData={planetData} aspect={aspect} />
            <DescriptionToggleContainer>
              <PlanetDescription
                planetData={planetData}
                aspect={aspect}
                screenSize={screenSize}
              />
              <StructureSurfaceToggle
                aspect={aspect}
                changeAspect={changeAspect}
                screenSize={screenSize}
                planet={planet}
              />
            </DescriptionToggleContainer>
            <QuantativeInfo planetData={planetData} screenSize={screenSize} />
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
