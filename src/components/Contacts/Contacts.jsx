import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { phoneDeleteContact } from '../../redux/Phonebook/slicePhonebook';

export const Contacts = () => {
  const dispatch = useDispatch();
  const hendelDelete = id => {
    console.log('id :', id);
    dispatch(deleteContact(id));
    dispatch(phoneDeleteContact(id));
  };
  const { filter } = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    if (filter) {
      return contacts.filter(element =>
        element.name.toLowerCase().includes(filter.trim())
      );
    }
    return contacts;
  };

  return (
    <ul>
      {filterContacts().map(item => (
        <li key={item.id}>
          <p>
            {item.name}: {item.phone}
          </p>
          <button onClick={() => hendelDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
