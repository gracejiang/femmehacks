import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Schedule = () => (
  <Section id="schedule" accent>
    <StyledContainer>
      <div>
        <h1>2021 Schedule</h1>
        <p>Lorem ipsum</p>
      </div>
    </StyledContainer>
  </Section>
);


const StyledContainer = styled(Container)`
  display: flex;
  // justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default Schedule;

