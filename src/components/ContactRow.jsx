
export default function ContactRow({ contact, handleSelectContact }) {
    return (
      <tr onClick={() => handleSelectContact(contact.id)}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }