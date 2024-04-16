import { useState } from 'react';
import './BookCreate.css';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      title,
      des,
    });
    setTitle(''); 
    setDes(''); 
  };

  return (
    <div className='form-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleChangeTitle}
          type="text"
          id="title"
          name="title"
          placeholder='Nhập Title'
          value={title} 
        />
        <label htmlFor="des">Des</label>
        <input
          onChange={handleChangeDes}
          type="text"
          id="des"
          name="des"
          placeholder='Nhập Des'
          value={des}
        />
        <input type="submit" value="Create!" />
      </form>
    </div>
  );
};

export default BookCreate;