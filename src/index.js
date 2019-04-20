let db = {
  contacts: []
};

const contacts = [{
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

//menampilkan data
function view() {
  // array.map
  let tbody = document.getElementById("table-rows");
  contacts.map((contact, index) => {
    let row = tbody.insertRow(); // tr, table row
    let column1 = row.insertCell(0); // td, table , column #0
    let column2 = row.insertCell(1); // column #1
    let column3 = row.insertCell(2);
    let column4 = row.insertCell(3);
    let column5 = row.insertCell(4);
    let column6 = row.insertCell(5);

    column1.innerHTML = contact.id;
    column2.innerHTML = contact.fullName;
    column3.innerHTML = contact.phoneNumber;
    column4.innerHTML = contact.email;
    column5.innerHTML = contact.gender;
    column6.innerHTML = ``;
  });
};

//tambah data
function add(data) {
  const addcontact = [...contacts, data];
  console.log(addcontact);
}

isValid = (...data) => {
  let val;
  data.map(contact => {
    
  })
}

const onBtnClick = document.getElementById("submit");
onBtnClick.addEventListener("click", function() {
  let fullname = document.getElementById("inputFullname");
  let email = document.getElementById("inputEmail");
  let phone = document.getElementById("inputPhonenumber");
  let gender = document.getElementById("inputGender");

    let tbody = document.getElementById("table-rows");
    let row = tbody.insertRow();
    let column1 = row.insertCell(0);
    let column2 = row.insertCell(1);
    let column3 = row.insertCell(2);
    let column4 = row.insertCell(3);
    let column5 = row.insertCell(4);
    let column6 = row.insertCell(5);

    column1.innerHTML = id;
    column2.innerHTML = fullNameadd.value;
    column3.innerHTML = phoneNumberadd.value;
    column4.innerHTML = emailadd.value;
    column5.innerHTML = genderadd.value;
    column6.innerHTML = ``;



function edit(data, id) {
  let editContact = contacts.map(contact => {
    if (contact.id === id) {
      return { ...contact,...data };
    }
    return contact;
  });

  console.log(editContact);
}

function remove(id) {
  // array.filter
  const removeContact = contacts.filter(contact => contact.id != id);
  // spread operator ....
  console.log(removeContact);
}


let input = {
  id: 5,
  fullName: "Shadow Maffi",
  phoneNumber: "8455497996",
  email: "smaffi4@bravesites.com",
  gender: "Male"
}

function updateDb(data) {
  db = db.contact = data;
};

let result;
result = add(input);
updateDb(result);
console.log(db);

view();

console.log("========View========");
view(contacts);
console.log("========Add========");
add(input);
console.log("========Edit========");
edit(input, 1);
console.log("========Remove========");
remove(1);