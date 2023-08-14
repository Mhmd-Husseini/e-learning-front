import "./style.css";
import Modal from "react-modal";
import { useState } from "react";

const ModalForm = ({ user, handleCloseModal, OpenModal, onUpdate }) => {
  const [data, setData] = useState(user);

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onUpdate(data);
    handleCloseModal();
  };

  return (
    <div>
      <Modal isOpen={OpenModal} className='modal'>
        <div className="container" key={user.id}>
          <label>ID</label>
          <input type="text" disabled className="input-field" value={data.id} />
          <label>Name</label>
          <input type="text" className="input-field" name="name" value={data.name} onChange={handleDataChange}/>
          <label>Email</label>
          <input type="text" className="input-field" name="email" value={data.email} onChange={handleDataChange}/>
          <label>Password</label>
          <input type="Password" className="input-field" name="password" value={data.password} onChange={handleDataChange}/>
          <label>Parent_id</label>
          <input type="number" className="input-field" name="parent_id" value={data.parent_id}  onChange={handleDataChange} />
          <button type="submit" className="submit-button" onClick={handleSubmit}> Submit </button>
          <button onClick={handleCloseModal} className="cancel-button"> Cancel </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
