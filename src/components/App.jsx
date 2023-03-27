import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrapper } from './App.styled';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Caption } from './App.styled';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert('Enter the correct number phone!');
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Wrapper>
          <Caption>Phonebook</Caption>
          <Form onSubmit={this.handleFormSubmit} />
          <Contacts
            contacts={
              visibleContacts.length === 0 ? this.state.contacts : visibleContacts
            }
            value={this.filter}
            onChange={this.changeFilter}
            onDeleteContact={this.deleteContact}
          />
        </Wrapper>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
