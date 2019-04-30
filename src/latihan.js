if(e.target.id == 'edit'){
  const id = e.target.attributes[2].nodeValue;

  let fullname = document.getElementById("input-fullname");
  let email = document.getElementById("input-email");
  let phone = document.getElementById("input-phoneNumber");
  let gender = document.getElementById("input-gender");
  let data_id = document.getElementById("id");
  
  // ambil data
  let data = []
  contact.filter(item=>{
    if (item.id == id) {
          data = item;
      }
  })

  

  fullname.value = data.fullName;
  email.value = data.email;
  phone.value = data.phoneNumber;
  gender.value = data.gender;
  data_id.value = data.id;

  //ubah id tambah ke edit data
  const ubah = document.getElementById('tambah');
  ubah.setAttribute('id','ubah')
  
} 