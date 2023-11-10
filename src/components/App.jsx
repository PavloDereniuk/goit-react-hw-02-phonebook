import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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

  updateFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredData = contacts.filter(item => {
      const filterName = item.name.toLowerCase().includes(filter.toLowerCase());

      return filterName;
    });

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filters={filter} onUpdateFilter={this.updateFilter} />
        {contacts.length > 0 && <ContactList data={filteredData} />}
      </>
    );
  }
}
