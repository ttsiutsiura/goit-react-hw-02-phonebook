import { ContactList } from './Contacts.styled';
import { ContactsCaption } from './Contacts.styled';
import { Filter } from 'components/Filter/Filter';

export function Contacts({ contacts }) {
  return (
    <>
      {contacts.length > 0 && <ContactsCaption>Contacts</ContactsCaption>}
      <Filter />
      <ContactList>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ContactList>
    </>
  );
}
