// let db = {
//   contacts: []
// };

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
  
  contacts.map((contact, index) => {
    let tbody = document.getElementById("table-rows");
    //membuat tabel
    let row = tbody.insertRow(); // tr, table row

    //memberikan atribut id dengan value sesuai id user pada setiap baris
    row.setAttribute("id", `db-${contact.id}`);

    let column1 = row.insertCell(0); // td, table , column #0
    let column2 = row.insertCell(1); // column #1
    let column3 = row.insertCell(2);
    let column4 = row.insertCell(3);
    let column5 = row.insertCell(4);
    let column6 = row.insertCell(5);
    
    //mengisi tabel
    column1.innerHTML = contact.id;
    column2.innerHTML = contact.fullName;
    column3.innerHTML = contact.phoneNumber;
    column4.innerHTML = contact.email;
    column5.innerHTML = contact.gender;
    column6.innerHTML = `
      <a href="#" id="hapus"> Hapus</a>
      <a href="#" id="edit"> Edit</a>
    `;
  });
};


// tambah data
function add(input) {
  const contacts = [...contacts, input];
  return contacts;
}

function isValid(...input){
  let valid;
  input.map( contact => {
    let isNull = contact.fullName !== "" && contact.phoneNumber !== "" && contact.email !== "";
    if ( isNull ) {
      if (contact.length > 3) {
        return true;
      } else {
        valid = 'min4';
        return false
      }
    } else {
      val = null;
      return false;
    }
  });
  if ( valid === null ) {
    alert("Input Tidak Boleh Kosong")
  } else {
    if (valid === "min4") {
      alert(" Masukkan minimal 4 karakter")
    } else {
      return true
    }
  }
};

//mengubah data
function edit(id) {
  let editContact = contacts.map(contact => {
    if (contact.id === id) {
      return { ...contact, ...data };
    }
    return contact;
  });

  console.log(editContact);
}

//menghapus data
function remove(id) {
  const removeContact = contacts.filter(contact => contact.id != id);
  console.log(removeContact);
}

//mengosongkan form
function clearForm() {
  
  let fullName = document.getElementById("input-fullname");
  let email = document.getElementById("input-email");
  let phoneNumber = document.getElementById("input-phonenumber");

  fullName.value = '';
  phoneNumber.value = '';
  email.value = '';
}

//event click untuk tombol submit
const submit = document.getElementById('submit');
submit.addEventListener('click', function(){
  let i = 5;
  let fullName = document.getElementById("input-fullname");
  let email = document.getElementById("input-email");
  let phoneNumber = document.getElementById("input-phonenumber");
  let gender = document.querySelector('input[name="gender"]:checked');

  //validasi
  const valid = isValid(fullName.value, email.value, phoneNumber.value);

  if (valid) {
    let tbody = document.getElementById("table-rows");
    //membuat tabel
    let row = tbody.insertRow(); // tr, table row

    //memberikan atribut id dengan value sesuai id user pada setiap baris
    row.setAttribute("id", `db-${i}`);

    let column1 = row.insertCell(0); // td, table data, column #0
    let column2 = row.insertCell(1); // column #1
    let column3 = row.insertCell(2);
    let column4 = row.insertCell(3);
    let column5 = row.insertCell(4);
    let column6 = row.insertCell(5);
    
    //mengisi tabel
    column1.innerHTML = i;
    column2.innerHTML = fullName.value;
    column3.innerHTML = phoneNumber.value;
    column4.innerHTML = email.value;
    column5.innerHTML = gender.value;
    column6.innerHTML = `
      <a href="#" id="hapus"> Hapus</a>
      <a href="#" id="edit"> Edit</a>
    `;

    let input = {
      id: i++,
      fullName: fullName.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      gender: gender.value
    }
  
    add(input);
  } else {
    console.log('add contact error');
  }
  clearForm();
})

//event click untuk tombol remove
// const hapus = document.getElementById(hapus)
// hapus.addEventListener("click", function(){
  //cari tr id db-contact.id
// })

view();