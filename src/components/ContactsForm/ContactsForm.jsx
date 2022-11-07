import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { phoneSetContact } from '../../redux/Phonebook/slicePhonebook';
import css from './ContactsForm.module.css';

export const Form = () => {
  const id = nanoid();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendlerChangeName = event => {
    const { value } = event.target;
    setName(value);
  };
  const hendlerChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handelSubmit = event => {
    event.preventDefault();
    dispatch(phoneSetContact({ id, name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handelSubmit}>
      <label>
        <span className={css.title}> Name</span>
        <br />
        <input
          onChange={hendlerChangeName}
          className={css.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name User"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        <span className={css.title}>Number</span> <br />
        <input
          onChange={hendlerChangeNumber}
          className={css.input}
          value={number}
          placeholder="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.btn}>Додати контакт</button>
      <br />
      <br />
    </form>
  );
};
