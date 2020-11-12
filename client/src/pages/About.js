import React from 'react';
import CertificationSection from "../components/about/certification/CertificationSection";
import ExperienceSection from "../components/about/experience/ExperienceSection";
import Head from "../components/about/Head";
import ContactSection from "../components/about/contact/ContactSection";
import Bottom from "../components/common/Bottom";
const About = () => {
  return (<>
  <Head />
  <ExperienceSection />
  <CertificationSection />  
  <ContactSection/>
  <Bottom />
</>);
};

export default About;
