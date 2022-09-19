import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Container from '../components/Container';
import HeroHeader from '../components/header/HeroHeader';
import ContactUs from '../features/sections/ContactUs';

const Contact = () => {
  const router = useRouter();

  return (
    <>
      <Container
        wrapperClass="header-wrapper"
        className="d-flex flex-column justify-content-center"
      >
        <HeroHeader
          title={router.locale === 'en' ? 'Contact' : '問い合わせ'}
          textAlign="center"
        />
      </Container>
      <Container wrapperClass="d-flex align-items-center ">
        <ContactUs />
      </Container>
    </>
  );
};

Contact.propTypes = {
  contactPage: PropTypes.arrayOf(PropTypes.object),
};

export default Contact;
