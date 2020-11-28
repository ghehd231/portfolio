import React from 'react';
import Section from '../../common/Section';
import Certification from './Certification';

const CertificationSection = () => {
  return <Section title="Certification" sub component={Certification} content={certifications} />;
};

const certifications = [
  {
    id: 1,
    title: '운전면허자격증',
    thumbnail: 'drive_logo',
    date: '2019.05',
  },
];

export default React.memo(CertificationSection);
