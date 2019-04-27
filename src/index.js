//id db
let i = 6;

//db
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
      <a href="#" id="hapus" db-id=${contact.id}> Hapus</a>
      <a href="#" id="edit" db-id=${contact.id}> Edit</a>
    `;
  });
};


// tambah data
function add(data) {
  const addContacts = [...contacts, data];
  return addContacts;
}

function isValid(...input){
  let valid;
  input.map( contact => {
    const numbers = /[0-9]/;
    const email = /[!@#_$%^&*(),.|]/;
    
 if(isNull){
   if(contact.fullName.length > 3 && contact.email.length > 3 && contact.phoneNumber.length > 3) {
    if(email.test(contact.email)){
      if(numbers.test(contact.phoneNumber)){
        return true
      }else{
        alert('Phone Number Harus angka');
        return false;
      }
    }else{
      alert('Email Harus Sesuai Dengan Format Email')
      return false;
    }

   }else{
     alert('Masukkan Minimal 4 Karakter');
    return false;
   }

 }else{
   alert('Input Tidak Boleh kosong');
   return false;
 }
});

//mengubah data
function edit(data,id) {
  let editContact = contacts.map(contact => {
    if (contact.id === id) {
      return { ...contact, ...data };
    }
    return contact;
  });

  return editContact;
}

//menghapus data
function remove(x) {
  const removeContact = contacts.filter(contact => contact.id != x);
  console.log(removeContact);
}

//mengosongkan form
function clearForm() {
  
  let fullName = document.getElementById("input-fullname");
  let phoneNumber = document.getElementById("input-phonenumber");
  let email = document.getElementById("input-email");

  fullName.value = '';
  phoneNumber.value = '';
  email.value = '';
}

//event click untuk tombol submit

//event click untuk tombol remove
document.addEventListener('click',function(e){

  if(e.target.id == 'hapus') {
    const id = e.target.attributes[2].nodeValue;
    const data = document.getElementById(`db-${id}`);
    data.innerHTML = "";
    remove(id);
  }

  if(e.target.id == 'edit') {
    const id = e.target.attributes[2].nodeValue;

    let fullName = document.getElementById("input-fullname");
    let phoneNumber = document.getElementById("input-phonenumber");
    let email = document.getElementById("input-email");
    let gender = document.getElementById("input-gender");
    let dbId = document.getElementById("id");

    let data = {};
    fullName.value = data.fullName;
    phoneNumber.value = data.phoneNumber;
    email.value = data.email;
    gender.value = data.gender;
    dbId.value = data.id;

    contacts.filter(contact => {
      if(contact.id == id) {
        data = contact
      }

    edit(data, id);
    });

    const edit = document.getElementById('submit');
    edit.setAttribute('id', 'ganti');
  }

  if(e.target.id == 'ganti') {

    let fullName = document.getElementById("input-fullname");
    let phoneNumber = document.getElementById("input-phonenumber");
    let email = document.getElementById("input-email");
    let gender = document.getElementById("input-gender");
    let dbId = document.getElementById("id");

    let dataBaru = document.getElementById(`db-${dbId.value}`);
    dataBaru.cells[0].innerHTML = dbId.value;    
    dataBaru.cells[1].innerHTML = fullName.value;
    dataBaru.cells[2].innerHTML = phoneNumber.value;
    dataBaru.cells[3].innerHTML = email.value;
    dataBaru.cells[4].innerHTML = gender.value;

    let input = {
      fullName: fullName.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      gender: gender.value
    };

    edit(input,dbId.value);

    clearForm();
  }

  if(e.target.id == 'submit'){
    let fullName = document.getElementById("input-fullname");
    let phoneNumber = document.getElementById("input-phonenumber");
    let email = document.getElementById("input-email");
    let gender = document.getElementById("input-gender");

    //validasi
    const valid = isValid(fullName.value, phoneNumber.value, email.value);

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
        <a href="#" id="hapus" db-id=${i}> Hapus</a>
        <a href="#" id="edit" db-id=${i}> Edit</a>
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

  }
  
const searchBar = document.forms['searchForm'].querySelector('input')
searchBar.addEventListener('keyup', function(e){

  if(e.target.attributes[0].nodeValue == 'fullname') {

  }

  if(e.target.attributes[0].nodeValue == 'gender') {

  }

})
});

view();

const tbody = document.querySelector('tbody#table-rows tr')

const term = e.target.value.toLowerCase()