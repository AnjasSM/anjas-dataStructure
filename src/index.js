const contacts = [
  {
    id: 1,
    fullName: "Genna Arnli",
    phoneNumber: "5278765234",
    email: "garnli0@photobucket.com",
    gender: "Female"
  },
  {
    id: 2,
    fullName: "Jojo Scotchford",
    phoneNumber: "7925766855",
    email: "jscotchford1@booking.com",
    gender: "Female"
  },
  {
    id: 3,
    fullName: "Kakalina Pietasch",
    phoneNumber: "3118199662",
    email: "kpietasch2@auda.org.au",
    gender: "Female"
  },
  {
    id: 4,
    fullName: "Araldo Coil",
    phoneNumber: "5887272284",
    email: "acoil3@behance.net",
    gender: "Male"
  },
  {
    id: 5,
    fullName: "Shadow Maffi",
    phoneNumber: "8455497996",
    email: "smaffi4@bravesites.com",
    gender: "Male"
  }
];

function view(data) {
  // array.map
  contacts.map(contact => console.log(contact));
}

function add(data) {
  // spread operator ...
  const addcontact = [...contacts, ...data];
  console.log(addcontact);
}

function edit(data, id) {
  // array.filter
  let editContact = contacts.filter(contact => contact.id === id);
  editContact = data;

  let newContact = contacts.filter(contact => contact.id != id);

  // spread operator ...
  const mergedContact = [...editContact, ...newContact];

  console.log(mergedContact);
}

function remove(data, id) {
  // array.filter
  const removeContact = contacts.filter(contact => contact.id != id);
  // spread operator ....
  console.log(removeContact);
}

console.log("========View========");
view(contacts);
console.log("========Add========");
add(contacts);
console.log("========Edit========");
edit(contacts, 1);
console.log("========Remove========");
remove(contacts, 1);
