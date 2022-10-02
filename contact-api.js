const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let contacts = [{
    "contact_name": "Johnny",
    "contact_profession": "teacher",
    "contact_tel_number": "123-456-7891",
    "contact_mobile_number": "234-567-8910",
}, {
    "contact_name": "Samer",
    "contact_profession": "engineer",
    "contact_tel_number": "789-156-3498",
    "contact_mobile_number": "786-159-2762",
}, {
    "contact_name": "karen",
    "contact_profession": "musician",
    "contact_tel_number": "753-951-4563",
    "contact_mobile_number": "1234-789-65",
}];

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const contact = req.body;

    
    console.log(contact);
    contacts.push(contact);

    res.send('Contact is added to the database');
});

app.get('/contact', (req, res) => {
    res.json(contacts);
});

app.get('/contact/:contact_name', (req, res) => {
    
    const contact_name = req.params.contact_name;

    
    for (let contact of contacts) {
        if (contact.contact_name === contact_name) {
            res.json(contact);
            return;
        }
    }

    
    res.status(404).send('Contact not found');
});

app.delete('/contact/:contact_name', (req, res) => {
    
    const contact_name = req.params.contact_name;
	console.log(contact_name);
    
    contacts = contacts.filter(i => {
        if (i.contact_name !== contact_name) {
            return true;
        }

        return false;
    });

    
    res.send('Contact is deleted');
});

app.post('/contact/:contact_name', (req, res) => {
    
    const contact_name = req.params.contact_name;
    const newContact = req.body;

   
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i]

        if (contact.contact_name === contact_name) {
            contacts[i] = newContact;
        }
    }

    
    res.send('Contact is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));