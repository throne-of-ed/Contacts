import './App.css';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  const [contacts, setContacts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
        },
    })
        .then((response) => response.json())
        .then((data) => {
        if (data.error) {
          console.log(data.error)
        } 
        else {     
          setContacts(data)
        }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
  }, [])

  const handleClick = (contact) => {
    const message = 'Name: ' + contact.name +'\n' +
                    'Username: ' + contact.username +'\n' +
                    'Phone: ' + contact.phone +'\n' +
                    'Email: ' + contact.email +'\n' +
                    'Address: ' + contact.address.suite + ', ' + 
                    contact.address.street + ', ' + contact.address.city  + 
                    ', ' + contact.address.zipcode + '\n' +
                    'Company: ' + contact.company.name + '\n' +
                    'Website: ' + contact.website
    alert(message)
  }

    return (
        <>
        <div className='flex-container'>
            <h1>
                Contacts
            </h1>
            <div className='body'>
                {contacts.map((contact)=>(
                  <div key={contact.id}>
                    <Button onClick={()=> {handleClick(contact)}} className='contact' variant="contained" color='primary'>
                        <AccountCircleIcon/>{contact.name}&nbsp;&nbsp;&nbsp;
                        <PhoneIcon/>{contact.phone}&nbsp;&nbsp;&nbsp;
                        <EmailIcon/>{contact.email}&nbsp;&nbsp;&nbsp;
                    </Button>
                    <br/><br/>
                  </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default App;
