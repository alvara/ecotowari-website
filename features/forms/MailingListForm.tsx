export default function MailingListForm() {
  return (
    <form name="mailinglist" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="mailinglist" />

      <div className="input-group">
        <input
          type="email"
          name="email"
          id="youremail"
          className={'w-100'}
          placeholder="Email"
        />

        <button type="submit" className="btn ">
          Send
        </button>
      </div>
    </form>
  );
}
