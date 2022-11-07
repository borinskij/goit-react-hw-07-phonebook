import { Section } from './Section/Section.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Form } from './ContactsForm/ContactsForm.jsx';
import { Filter } from './Filter/Filter.jsx';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <Form />
      </Section>
      <Section title={'Filter'}>
        <Filter />
      </Section>

      <Section title={'Contacts'}>
        <Contacts />
      </Section>
    </>
  );
};
