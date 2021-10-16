import './Modal.css';

const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal-body'>
        <h1>New build</h1>
        <form className={"modal-form"}>
          <label htmlFor="commit">Enter the commit hash which you want to build.</label><br />
          <input type="search" id="commit" name="commit"/>

          <div className={"modal-buttons"}>
            <button type="submit" value="Submit">Run build</button>
            <a href="/">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
