const addContactBtn = document.getElementById('add-contact-btn');
const listGroup = document.getElementById('list-group');

let contacts = [
  {
    name: 'Maxwell Wright',
    phone: '(0191) 719 6495',
    email: 'agent1.@cctb.ca',
  },
  {
    name: 'Tom MacDonalds',
    phone: '(0191) 777 6495',
    email: 'agent2.@cctb.ca',
  },
  {
    name: 'Helen Richards',
    phone: '(0191) 0800 1111',
    email: 'agent3.@cctb.ca',
  },
];

contacts.forEach(appendContact);

addContactBtn.addEventListener('click', () => {
  let userChoice;
  do {
    userChoice = prompt(
      'Type "new" to add a contact or "delete" to delete all contacts'
    );
    if (userChoice === 'new') {
      let newName = prompt('Enter name:');
      let newPhone = prompt('Enter phone number:');
      let newEmail = prompt('Enter email address:');

      // Validate input
      if (!newName || isNaN(newPhone) || !newEmail.includes('@')) {
        alert('Invalid input. Please try again.');
        continue;
      }

      const newContact = {
        name: newName,
        phone: newPhone,
        email: newEmail,
      };

      // Add new contact
      contacts.push(newContact);
      console.log('New contact added: ' + newName);

      appendContact(newContact);
      break;
    } else if (userChoice === 'delete') {
      contacts = [];
      listGroup.replaceChildren();
      break;
    }
  } while (true);
});

function appendContact({ name, phone, email }) {
  const li = listGroup.appendChild(document.createElement('li'));
  li.classList.add('list-group-item');
  li.textContent = `${name} / ${phone} / ${email}`;
}
