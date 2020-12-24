import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';
import { Row, Col } from 'react-bootstrap';
import Emoji from "../common/emoji"

const Schedule = () => (
  <Section id="schedule" accent>
    <Container>
      <h1>2021 Schedule <Emoji symbol="🕒"/></h1>
      <br/>
      <Row>
        <Col xs={12} md={6}>
          <h3>February 5 (Friday)</h3>
          <p>Schedule TBD!</p>
        </Col>

        <Col xs={12} md={6}>
          <h3>February 6 (Saturday)</h3>
          <p>Schedule TBD!</p>
        </Col>
      </Row>
      
    </Container>
  </Section>
);


// const StyledContainer = styled(Container)`
//   display: flex;
//   // justify-content: flex-end;
//   position: relative;

//   @media (max-width: ${props => props.theme.screen.md}) {
//     justify-content: center;
//   }
// `;

export default Schedule;

