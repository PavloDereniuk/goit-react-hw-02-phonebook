import { ContactData } from './ContactData';
import { ContactListWrapper } from './ContactList.styled.js';

export const ContactList = ({ data }) => {
  return (
    <ContactListWrapper>
      <ContactData data={data}/>
    </ContactListWrapper>
  );
};
