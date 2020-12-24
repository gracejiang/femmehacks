import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import { Row, Col } from 'react-bootstrap';

const About = () => (
  <Section id="about">
    <Container>
      <h1>About FemmeHacks</h1>
      <br/><br/>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <h3>What is FemmeHacks?</h3>
          <p>Now running on our 7th year, FemmeHacks is a two-day collegiate hackathon 
          hosted at the University of Pennsylvania by the university’s Women in Computer 
          Science chapter. FemmeHacks aims to <b>empower</b>, <b>educate</b>, and <b>inspire </b> 
          women and non-binary folks in the Philadelphia tech community. After forming teams, 
          attendees build a variety of web, mobile, and hardware applications, learn from 
          workshops, and attend various speaker events. This year, FemmeHacks will be held 
          virtually. </p>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <h3>Who can attend?</h3>
          <p>FemmeHacks welcomes trans and cis women, non-binary, and gender non-conforming 
          people of all levels of experience – equality for all! Participants range from students 
          from a variety of schools such as University of Pennsylvania, Princeton, Drexel, 
          Rutgers, Bryn Mawr, Villanova, Temple, Haverford, as well as young talents from 
          Philadelphia high schools looking to break into the tech field. Last year, we had <b>over 
          150 attendees</b>!</p>
        </Col>

        <Col xs={12} md={6} lg={4}>
        <h3>Why attend FemmeHacks?</h3>
          {/* Can change workshop topics to this year's once we know them */}
          <p>FemmeHacks is committed to education — we’ve hosted workshops on all sorts of topics, 
          including GitHub, web development, iOS development and computer graphics. FemmeHacks also 
          gives attendees the opportunity to connect with other women and non-binary people in the 
          Philly tech community. Last year, <b>87% of our attendees</b> said they made at least one valuable 
          connection with a fellow student or mentor! Of course, there will be great prizes too. </p>
        </Col>

      </Row>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
