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
  flex-direction: ${({ screenSize }) =>
    screenSize === "desktop" ? "row" : "column"};
  flex-wrap: ${({ screenSize }) =>
    screenSize === "desktop" ? "wrap" : "no-wrap"};
  justify-content: ${({ screenSize }) =>
    screenSize === "desktop" ? "space-between" : ""};
  align-items: center;
  padding: ${({ screenSize }) => {
    if (screenSize === "tablet") return "0 2.5em";
    else if (screenSize === "desktop") return "0 7.5em";
    else return "0 1.5em";
  }};
  margin: 0 auto;
  margin-top: ${({ screenSize }) => (screenSize === "desktop" ? "6em" : "1em")};
  margin-bottom: 3em;
  max-width: ${({ screenSize }) => (screenSize === "mobile" ? "530px" : "1200px")};
`;

const DescriptionToggleContainer = styled.div`
  display: flex;
  flex-direction: ${({ screenSize }) =>
    screenSize === "tablet" ? "row" : "column"};
  width: ${({ screenSize }) => (screenSize === "desktop" ? "35%" : "auto")};
  gap: ${({ screenSize }) => (screenSize === "desktop" ? "2.5em" : "0")};
  justify-content: space-between;
  align-items: center;
`;

const determineScreenSize = () => {
  if (window.innerWidth < 768) {
    return "mobile";
  } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
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
            <PlanetImage
              planetData={planetData}
              aspect={aspect}
              screenSize={screenSize}
            />
            <PlanetDescription
              planetData={planetData}
              aspect={aspect}
              screenSize={screenSize}
            />
            <QuantativeInfo planetData={planetData} screenSize={screenSize} />
          </MainContainer>
        </div>
      );
    } else {
        return (
          <div className="App">
            <Header
              planet={planet}
              changePlanet={changePlanet}
              screenSize={screenSize}
            />
            <MainContainer screenSize={screenSize}>
              <PlanetImage
                planetData={planetData}
                aspect={aspect}
                screenSize={screenSize}
              />
              <DescriptionToggleContainer screenSize={screenSize}>
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
      } else if (window.innerWidth > 768 && window.innerWidth < 1200) {
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
