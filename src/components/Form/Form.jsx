import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Label } from './Form.styled';
import { Input } from './Form.styled';
import { Button } from './Form.styled';
import { FormEl } from './Form.styled';

export class Form extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const contactName = event.target.elements.name.value;
    const contactNumber = event.target.elements.number.value;

    this.props.onSubmit(contactName, contactNumber);

    form.reset();
  };

  render() {
    return (
      <FormEl onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameInputId}
        />
        <Label htmlFor={this.numberInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.numberInputId}
        />
        <Button type="submit">Add contact</Button>
      </FormEl>
    );
  }
}
