import { FilterCaption } from 'components/Contacts/Contacts.styled';
import { Input } from 'components/Form/Form.styled';

export const Filter = () => {
  return (
    <>
      <FilterCaption>Find contact by name:</FilterCaption>
      <Input type="text" />
    </>
  );
};
