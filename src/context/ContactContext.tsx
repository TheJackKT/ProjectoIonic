
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  photo: string;
}

interface ContactContextType {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
  deleteContact: (id: number) => void;
}

const ContactContext = createContext<ContactContextType>(
  {} as ContactContextType
);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('contacts');
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updated: Contact) => {
    setContacts(
      contacts.map((c) => (c.id === updated.id ? updated : c))
    );
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);

