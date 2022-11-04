import axios from 'axios';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    async function postEmail() {
      try {
        const data = await axios({
          method: 'POST',
          url: '/api/contact/',
          data: { email, message },
        }).then((res) => {
          console.log(res.data);
          setEmail('');
          setMessage('');
          openModal();
        });
      } catch (error) {
        console.log('Error submitting form..');
      }
    }
    postEmail();
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <form name="mailinglist" onSubmit={(e) => handleSubmit(e)}>
        <label>What is your Email?</label>
        <input
          type="email"
          name="email"
          className={'w-100'}
          placeholder="Email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <label>Please fill in the details </label>
        <textarea
          name="message"
          className={'w-100'}
          placeholder="Message"
          onChange={(e) => setMessage(e.currentTarget.value)}
        />

        <button type="submit" className="btn d-block">
          Send <span className="btn-carrot">›</span>
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Success"
        ariaHideApp={false}
      >
        <h2>Success!</h2>
        <div>Email Signup Success!</div>
      </Modal>
    </>
  );
}
