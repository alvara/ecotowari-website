import axios from 'axios';
import { FormEvent, useState } from 'react';

export default function MailingListForm() {
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    async function postEmail() {
      try {
        const data = await axios({
          method: 'POST',
          url: '/api/mailinglist/',
          data: { email },
        }).then((res) => {
          console.log(res.data);
          setEmail('');
        });
      } catch (error) {
        console.log('Error submitting form..');
      }
    }
    postEmail();
  }

  return (
    <form name="mailinglist" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group">
        <input
          type="email"
          name="email"
          className={'w-100'}
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
        />

        <button type="submit" className="btn ">
          Send
        </button>
      </div>
    </form>
  );
}
