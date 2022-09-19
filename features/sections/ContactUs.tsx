import React from 'react';
import { useRouter } from 'next/router';

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
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />

          <label>What is your Email?</label>
          <input
            type="email"
            name="email"
            className={'w-100'}
            placeholder="Email"
          />

          <label>Please fill in the details </label>
          <textarea name="content" className={'w-100'} placeholder="Message" />

          <button type="submit" className="btn d-block">
            Send <span className="btn-carrot">›</span>
          </button>
          {/* {data.buttontext[router.locale]} */}
        </form>
      </div>
    </div>
  );
}
