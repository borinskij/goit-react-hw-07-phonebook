import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { phoneDeleteContact } from '../../redux/Phonebook/slicePhonebook';
import { contacts, filters } from '../../redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const hendelDelete = id => {
    dispatch(deleteContact(id));
    dispatch(phoneDeleteContact(id));
  };
  const filter = useSelector(filters);
  const contact = useSelector(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    if (filter) {
      return contact.filter(element =>
        element.name.toLowerCase().includes(filter.trim())
      );
    }
    return contact;
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
