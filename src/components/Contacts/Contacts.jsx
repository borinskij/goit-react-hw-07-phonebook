import { useDispatch, useSelector } from 'react-redux';
import { phoneDeleteContact } from '../../redux/Phonebook/slicePhonebook';

export const Contacts = () => {
  const dispatch = useDispatch();
  const hendelDelete = id => {
    dispatch(phoneDeleteContact(id));
  };
  const { filter } = useSelector(state => state.filter);
  const { contacts } = useSelector(state => state.contacts);

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
            {item.name}: {item.number}
          </p>
          <button onClick={() => hendelDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
