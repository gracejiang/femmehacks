import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  // GENERAL
  {
    title: 'Where will the hackathon be and when?',
    content: () => (
      <>
        This year the hackathon will take place on February Xth-Xth, 2021. It is NOT overnight.
        <br/><br/>
        It will be at the Penn Engineering on the University of Pennsylvania's campus in Philadelphia on Friday, Feb 7th, and the Pennovation Center on Saturday, Feb 8th.
        <br/><br/>
        Penn Engineering Address: 220 S 33rd St, Philadelphia, PA 19104
        <br/><br/>
        Pennovation Center Address: 3401 Grays Ferry Ave, Philadelphia, PA 19146.
      </>
    ),
  },
  {
    title: 'Where can I find the schedule?',
    content: () => (
      <>
        We’re still finalizing the details. A schedule will be available on this site in INSERT TIME HERE!
      </>
      // Include link that jumps to schedule once released
    ),
  },
  {
    title: 'How much would I need to pay?',
    content: () => (
      <>
        Nothing — attending FemmeHacks is completely free.
      </>
    ),
  },
  {
    title: 'Who should I contact if I have more questions?',
    content: () => (
      <>
        Please write to us at XX@XX.com. We’re happy to help.
      </>
    ),
  },
  //THE HACKATHON
  {
    title: 'How will FemmeHacks work virtually?',
    content: () => (
      <>
        INSERT DETAILS HERE.
      </>
    ),
  },
  {
    title: 'What kinds of projects have past attendees made?',
    content: () => (
      <>
        Past attendees have made all sorts of web, mobile, and hardware applications. 
        Click here to see some examples! [INSERT LINK]
      </>
    ),
  },
  {
    title: 'Should I prepare anything before the hackathon?',
    content: () => (
      <>
        INSERT DETAILS HERE. 
      </>
    ),
  },
  {
    title: 'Will there be swag or prizes?',
    content: () => (
      <>
        Yes!
      </>
      //Add more details about shipping, etc.
    ),
  },
  //REGISTRATION
  {
    title: 'How can I register?',
    content: () => (
      <>
        Click here! [INSERT LINK] 
      </>
    ),
  },
  {
    title: 'When do I need to register by?',
    content: () => (
      <>
        Registration will be open until INSERT DATE HERE. 
      </>
    ),
  },
  {
    title: 'I’ve never been to a hackathon before. Should I still register?',
    content: () => (
      <>
        Absolutely. We will have plenty of beginner-friendly workshops, like INSERT WORKSHOPS HERE. 
        Mentors will also be there to help you! 
      </>
    ),
  },
  {
    title: 'I don’t have a team. Should I still register?',
    content: () => (
      <>
        Of course. No need to worry, we’ll have team formation events to help you find great 
        people to work with! 
      </>
    ),
  },
  
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
