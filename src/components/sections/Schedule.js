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
          <p>
            <br/><b>3:00pm - 6:00pm</b>: <b>Check-in</b>
            <br/><b>3:00pm - 6:00pm</b>: Introductions &amp; Team Formation
            <br/><b>4:30pm - 5:00pm</b>: <b>Opening Ceremony</b>
            <br/><b>5:00pm - 6:00pm</b>: Sponsors Meet n' Greet
            <br/><b>6:00pm - 6:45pm</b>: [Beginner] Introduction to GitHub
            <br/><b>6:00pm - 6:45pm</b>: [Intermediate] Introduction to UI/UX
            <br/><b>7:00pm - 7:45pm</b>: [Beginner] Introduction to Web Development Pt. 1
            <br/><b>7:00pm - 7:45pm</b>: [Intermediate] Intermediate Web Development
            <br/><b>8:00pm - 8:45pm</b>: [Beginner] Introduction to Web Development Pt. 2
            <br/><b>8:00pm - 8:45pm</b>: [Beginner] iOS Workshop
            <br/><b>9:00pm - 9:30pm</b>: Speed Dating &amp; Team Formation
            <br/><b>9:30pm - 10:30pm</b>: Game Night (Among Us, Code Names, &amp; more!)
          </p>
        </Col>

        <Col xs={12} md={6}>
          <h3>February 6 (Saturday)</h3>
          <p>
            <br/><b>8:00am</b>: <b>Hacking Starts</b>
            <br/><b>8:00am - 9:30am</b>: Office Hours – Ideation
            <br/><b>9:30am - 10:30am</b>: Sponsor Workshop #1
            <br/><b>10:30am - 11:30am</b>: Sponsor Workshop #2
            <br/><b>12:00pm - 1:00pm</b>: Women in Tech Panel
            <br/><b>1:00pm - 2:00pm</b>: Sponsor Workshop #3
            <br/><b>2:00pm - 4:00pm</b>: Scribble
            <br/><b>2:00pm - 2:30pm</b>: The Percentage Project: Data-Driven Advocacy
            <br/><b>2:00pm - 3:00pm</b>: Sponsor Workshop #4
            <br/><b>3:00pm - 4:00pm</b>: Sponsor Workshop #5
            <br/><b>4:00pm - 4:30pm</b>: PM &amp; Startup Workshop
            <br/><b>4:30pm - 5:30pm</b>: Code Names
            <br/><b>6:00pm - 8:00pm</b>: Office Hours
            <br/><b>8:00pm</b>: <b>Hacking Stops</b>
            <br/><b>8:30pm</b>: <b>Devpost Submission Deadline</b>
            <br/><b>8:45pm - 10:00pm</b>: Judging Time
            <br/><b>9:30pm - 10:00pm</b>: Trivia Night
            <br/><b>8:00pm</b>: <b>Closing Ceremony</b>
          </p>
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

