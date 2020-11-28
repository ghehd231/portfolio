import React from 'react';
import Section from '../../common/Section';
import Contact from './Contact';
const ContactSection = () => {
  return <Section title="contact" component={Contact} sub vertical content={contacts} />;
};

const contacts = [
  {
    id: 1,
    phone: '010-7739-9829',
    Email: 'ghehd231@naver.com',
  },
];
export default React.memo(ContactSection);
