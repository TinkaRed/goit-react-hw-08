import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors.js"; 
import { selectLoading } from "../../redux/contacts/selectors";

function ContactList() {
  const loading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts); 

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={c.wrapper}>
      {filteredContacts.length === 0 ? (
        <p>Empty list. Please add a contact</p>
      ) : (
        filteredContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          );
        })
      )}
    </ul>
  );
}

export default ContactList;
