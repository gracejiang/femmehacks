import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
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
    title: 'Question?',
    content: () => (
      <>
        Answer.
      </>
    ),
  },
  {
    title: 'Question?',
    content: () => (
      <>
        Answer.
      </>
    ),
  },
  {
    title: 'Question?',
    content: () => (
      <>
        Answer.
      </>
    ),
  },
  {
    title: 'Question?',
    content: () => (
      <>
        Answer.
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
