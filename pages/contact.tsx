import React from 'react';
import groq from 'groq';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import client from '../client';
import Container from '../components/Container';
import HeroHeader from '../components/header/HeroHeader';
import ContactUs from '../features/sections/ContactUs';

export async function getStaticProps() {
  const contactPage = await client.fetch(groq`
      *[_type == "contact-page"] | order(publishedAt desc)
    `);

  return {
    props: {
      contactPage,
    },
  };
}

const Contact = ({ contactPage }) => {
  const router = useRouter();
  const { headersection, formsection } = contactPage[0];

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
