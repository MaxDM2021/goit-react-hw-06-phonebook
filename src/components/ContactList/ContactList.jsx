import React from 'react';
import "./ContactListStyles.scss";


const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="ContactList__item">
        <p className="TodoList__text">
          {name}: {number}
        </p>
        <button
          type="button"
          className="ContactList__btn"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
