import { NavLink } from 'react-router-dom';

export const ContactsPage = () => {
  return (
    <div className='contactsPage'>
      <h1>Contacts Page</h1>
      <NavLink to='/'>Go to Home</NavLink>
    </div>
  );
};
