import React from 'react';
import styled from 'styled-components';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import palette from '../../../lib/styles/palette';

const Contact = ({ item }) => {
  return (
    <ContactContainer>
      <MetaBox>
        <MataTitle>
          {item.title}
        </MataTitle>
        <MetaPhone>
          <BiPhoneCall />
          {item.phone}
        </MetaPhone>
        <MetaEmail>
          <HiOutlineMail />
          {item.Email}
        </MetaEmail>
      </MetaBox>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MetaBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.white};
`;
const MataTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;
const MetaPhone = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 0.3rem;
  }
`;
const MetaEmail = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  & > svg {
    margin-right: 0.3rem;
  }
`;
export default React.memo(Contact);
