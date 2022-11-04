import axios from 'axios';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

export default function MailingListForm() {
  const [email, setEmail] = useState('');

  // modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    async function postEmail() {
      try {
        const data = await axios({
          method: 'POST',
          url: '/api/mailinglist/',
          data: { email },
        }).then((res) => {
          console.log('success submit..');
          setEmail('');
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
