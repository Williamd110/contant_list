import { useState, useEffect } from "react";
import './App.css'
import ContactList from "./components/ContactList";


export default function App() {
  const [contacts, setContacts] = useState([]); // State to store contacts
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  // Fetch contacts and update the state
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, []);

  
  const handleSelectContact = (contactId) => {
    const contact = contacts.find((contact) => contact.id === contactId);
    setSelectedContactId(contactId);
    setSelectedContact(contact); 
  };

  return (
    <>
      {selectedContactId ? (
        <div>
          <h2>Contact Details!</h2>
          <p><strong>Name:</strong> {selectedContact.name}</p>
          <p><strong>Email:</strong> {selectedContact.email}</p>
          <p><strong>Phone:</strong> {selectedContact.phone}</p>
          <p><strong>Address:</strong> {selectedContact.address.street}, {selectedContact.address.city}, {selectedContact.address.zipcode}</p>
          <p><strong>Company:</strong> {selectedContact.company.name}</p>
          <p><strong>Website:</strong> {selectedContact.website}</p>

          <button onClick={() => setSelectedContactId(null)}>
            Back to Contact List
          </button>
        </div>
      ) : (
        // Pass contacts
        <ContactList contacts={contacts} handleSelectContact={handleSelectContact} />
      )}
    </>
  );
}