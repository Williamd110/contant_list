import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ contacts, handleSelectContact }) {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              handleSelectContact={handleSelectContact} 
            />
          ))}
        </tbody>
      </table>
    );
  }