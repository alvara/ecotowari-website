import React from 'react';
import { useRouter } from 'next/router';
import ContactForm from '../forms/ContactForm';

export default function ContactUs() {
  const router = useRouter();

  return (
    <div className="row">
      <div className="col-md-5">
        <h2 className="text-center">
          {router.locale === 'en'
            ? 'We are here for you!'
            : 'We are here for you!'}
        </h2>
        <pre>
          {router.locale === 'en'
            ? `If you have any questions or comments and you'd like to get in touch with the ecotowari team, please fill in the following form. 

We will do our best to get back to within 3 business days. Thank you!`
            : `If you have any questions or comments and you'd like to get in touch with the ecotowari team, please fill in the following form. 

We will do our best to get back to within 3 business days. Thank you!`}
        </pre>
      </div>
      <div className="col-md-7">
        <ContactForm />
      </div>
    </div>
  );
}
