import React from 'react';
import styled from 'styled-components';

const QuantativeInfoSection = styled.div`
  color: #ffffff;
  margin-top: ${({ screenSize }) => screenSize === "desktop" ? "4em" : "1.75em"};
  width: 100%;
  max-width: ${({ screenSize }) => screenSize === "mobile" && "470px"};
  display: ${({ screenSize }) => (screenSize !== "mobile" ? "flex" : "")};
  gap: ${({ screenSize }) => (screenSize !== "mobile" ? "1em" : "0")};
`;

const Attribute = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${({ screenSize }) =>
    screenSize !== 'mobile' ? "1.5em .8em" : ".6em 1.5em"};
  display: flex;
  flex-direction: ${({ screenSize }) => screenSize !== "mobile" && "column"};
  width: ${({ screenSize }) => screenSize !== "mobile" && "25%"};
  flex-direction: ${({ screenSize }) => screenSize !== "mobile" && "column"};
  justify-content: space-between;
  align-items: ${({ screenSize }) =>
    screenSize !== 'mobile' ? "flex-start" : "center"};
  text-transform: uppercase;
  margin-bottom: ${({ screenSize }) =>
    screenSize === "tablet" ? "0" : ".7em"};

  gap: ${({ screenSize }) => (screenSize !== 'mobile' ? ".7em" : "0")};
`;

const AttributeName = styled.p`
  font-family: var(--ff-spartan);
  font-size: ${({ screenSize }) => screenSize !== 'desktop' ? '.5rem' : '.7rem'};
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: .75px;
`;

const AttributeValue = styled.p`
  font-family: var(--ff-antonio);
  font-size: ${({ screenSize }) => {
    if(screenSize === 'mobile') return '1.25rem';
    else if (screenSize === 'tablet') return '1.5rem';
    else if (screenSize === 'desktop') return '2.5rem';
  }};
`;



const QuantativeInfo = ({planetData, screenSize}) => {
    return (
      <QuantativeInfoSection screenSize={screenSize}>
        <Attribute screenSize={screenSize}>
          <AttributeName screenSize={screenSize}>rotation time</AttributeName>
          <AttributeValue screenSize={screenSize}>
            {planetData.rotation}
          </AttributeValue>
        </Attribute>
        <Attribute screenSize={screenSize}>
          <AttributeName screenSize={screenSize}>revolution time</AttributeName>
          <AttributeValue screenSize={screenSize}>
            {planetData.revolution}
          </AttributeValue>
        </Attribute>
        <Attribute screenSize={screenSize}>
          <AttributeName screenSize={screenSize}>radius</AttributeName>
          <AttributeValue screenSize={screenSize}>
            {planetData.radius}
          </AttributeValue>
        </Attribute>
        <Attribute screenSize={screenSize}>
          <AttributeName screenSize={screenSize}>average temp.</AttributeName>
          <AttributeValue screenSize={screenSize}>
            {planetData.temperature}
          </AttributeValue>
        </Attribute>
      </QuantativeInfoSection>
    );
}

export default QuantativeInfo
