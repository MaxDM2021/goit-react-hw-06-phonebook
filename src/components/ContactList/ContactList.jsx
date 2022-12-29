import React from 'react';
import "./ContactListStyles.scss";
import { deleteContact } from 'components/redux/contactSlice';
import { useDispatch } from 'react-redux';




const ContactList = ({ contacts }) => {

const dispatch = useDispatch();

return (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="ContactList__item">
        <p className="TodoList__text">
          {name}: {number}
        </p>
        <button
          type="button"
          className="ContactList__btn"
          onClick={() => dispatch(deleteContact({id}))}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>)

};

export default ContactList;
