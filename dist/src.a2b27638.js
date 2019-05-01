// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectedRow = '';
var i = 6; //penampung id untuk edit contact

var idTampung = [];
var idFilter = [1, 2, 3, 4, 5]; //db

var contacts = [{
  id: 1,
  fullName: "Genna Arnli",
  phoneNumber: "5278765234",
  email: "garnli0@photobucket.com",
  gender: "Female"
}, {
  id: 2,
  fullName: "Jojo Scotchford",
  phoneNumber: "7925766855",
  email: "jscotchford1@booking.com",
  gender: "Female"
}, {
  id: 3,
  fullName: "Kakalina Pietasch",
  phoneNumber: "3118199662",
  email: "kpietasch2@auda.org.au",
  gender: "Female"
}, {
  id: 4,
  fullName: "Araldo Coil",
  phoneNumber: "5887272284",
  email: "acoil3@behance.net",
  gender: "Male"
}, {
  id: 5,
  fullName: "Shadow Maffi",
  phoneNumber: "8455497996",
  email: "smaffi4@bravesites.com",
  gender: "Male"
}]; //menampilkan data

function view() {
  contacts.map(function (contact, index) {
    //menyeleksi id table-row
    var tbody = document.getElementById("table-rows"); //membuat tabel

    var row = tbody.insertRow(); // tr, table row
    //memberikan atribut id dengan value sesuai id user pada setiap baris

    row.setAttribute("id", "db-".concat(contact.id));
    var column1 = row.insertCell(0); // td, table , column #0

    var column2 = row.insertCell(1); // column #1

    var column3 = row.insertCell(2);
    var column4 = row.insertCell(3);
    var column5 = row.insertCell(4);
    var column6 = row.insertCell(5); //mengisi tabel

    column1.innerHTML = contact.id;
    column2.innerHTML = contact.fullName;
    column3.innerHTML = contact.phoneNumber;
    column4.innerHTML = contact.email;
    column5.innerHTML = contact.gender;
    column6.innerHTML = "\n      <a href=\"#\" id=\"hapus\" db-id=".concat(contact.id, " class=\"btn btn-outline-danger\"> Hapus</a>\n      <a href=\"#\" id=\"edit\" db-id=").concat(contact.id, " class=\"btn btn-outline-success\"> Edit</a>\n    ");
  });
}

; // tambah data

function add(data) {
  var addContacts = [].concat(contacts, [data]);
  return addContacts;
}

; //mengubah data

function edit(data, id) {
  var editContact = contacts.map(function (contact) {
    if (contact.id === id) {
      return _objectSpread({}, contact, data);
    }

    return contact;
  });
  return editContact;
}

; //menghapus data

function remove(x) {
  var removeContact = contacts.filter(function (contact) {
    return contact.id != x;
  });
  console.log(removeContact);
}

; //validasi form input nama, nomer, email

function isValid(fullname, phonenumber, email) {
  var numberval = /^[0-9]+$/;
  var emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/;

  if (fullname != '' && phonenumber != '' && email != '') {
    if (fullname.length > 3 && phonenumber.length > 3 && email.length > 3) {
      if (phonenumber.match(numberval)) {
        if (emailval.test(email)) {
          return true;
        } else {
          alert('Format Email Harus Sesuai \n youremail@mail.com');
        }
      } else {
        alert('Phone Number Harus Berupa Angka');
        return false;
      }
    } else {
      alert('Input Minimal 4 Karakter');
      return false;
    }
  } else {
    alert('Input Tidak Boleh kosong');
    return false;
  }
}

; //mengosongkan form

function clearForm() {
  var fullName = document.getElementById("input-fullname");
  var phoneNumber = document.getElementById("input-phonenumber");
  var email = document.getElementById("input-email");
  fullName.value = '';
  phoneNumber.value = '';
  email.value = '';
}

;
document.addEventListener('click', function (e) {
  //evwnt klik untuk tombol hapus
  if (e.target.id == 'hapus') {
    if (confirm("Apakah Anda Yakin Untuk Menghapus Kontak Ini ?")) {
      var _id = e.target.attributes[2].nodeValue;
      var data = document.getElementById("db-".concat(_id));
      data.innerHTML = "";
      remove(_id);
    }

    ;
  }

  ; //event klik untuk tombol edit

  if (e.target.id == 'edit') {
    var _id2 = e.target.attributes[2].nodeValue;
    var fullName = document.getElementById("input-fullname");
    var phoneNumber = document.getElementById("input-phonenumber");
    var email = document.getElementById("input-email");
    var gender = document.getElementById("input-gender");
    var _data = [];
    contacts.filter(function (contact) {
      if (contact.id == _id2) {
        _data = contact;
      }

      ;
    });
    fullName.value = _data.fullName;
    phoneNumber.value = _data.phoneNumber;
    email.value = _data.email;
    gender.value = _data.gender;
    idTampung[0] = _data.id;

    var _edit = document.getElementById('submit');

    _edit.setAttribute('id', 'edited');
  }

  ;

  if (e.target.id == 'edited') {
    var _fullName = document.getElementById("input-fullname");

    var _phoneNumber = document.getElementById("input-phonenumber");

    var _email = document.getElementById("input-email");

    var _gender = document.getElementById("input-gender"); //validasi


    var valid = isValid(_fullName.value, _phoneNumber.value, _email.value);

    if (valid) {
      //seleksi tr yang akan diedit
      var tr = document.getElementById("db-".concat(idTampung[0]));
      tr.cells[1].innerHTML = _fullName.value;
      tr.cells[2].innerHTML = _phoneNumber.value;
      tr.cells[3].innerHTML = _email.value;
      tr.cells[4].innerHTML = _gender.value;
      var input = {
        id: idTampung[0],
        fullName: _fullName.value,
        phoneNumber: _phoneNumber.value,
        email: _email.value,
        gender: _gender.value
      };
      edit(input, id[0]);
      alert('Contact Telah Di Update');
      clearForm();
      var submit = document.getElementById('edited');
      submit.setAttribute('id', 'submit');
    }

    ;
  }

  ; //event klik untuk tombol submit

  if (e.target.id == 'submit') {
    var _fullName2 = document.getElementById("input-fullname");

    var _phoneNumber2 = document.getElementById("input-phonenumber");

    var _email2 = document.getElementById("input-email");

    var _gender2 = document.getElementById("input-gender"); //validasi


    var _valid = isValid(_fullName2.value, _phoneNumber2.value, _email2.value);

    if (_valid) {
      var tbody = document.getElementById("table-rows"); //membuat tabel

      var row = tbody.insertRow(); // tr, table row
      //memberikan atribut id dengan value sesuai id user pada setiap baris

      row.setAttribute("id", "db-".concat(i));
      var column1 = row.insertCell(0); // td, table data, column #0

      var column2 = row.insertCell(1); // column #1

      var column3 = row.insertCell(2);
      var column4 = row.insertCell(3);
      var column5 = row.insertCell(4);
      var column6 = row.insertCell(5); //mengisi tabel

      column1.innerHTML = i;
      column2.innerHTML = _fullName2.value;
      column3.innerHTML = _phoneNumber2.value;
      column4.innerHTML = _email2.value;
      column5.innerHTML = _gender2.value;
      column6.innerHTML = "\n          <a href=\"#\" id=\"hapus\" db-id=".concat(i, " class=\"btn btn-outline-danger\"> Hapus</a>\n          <a href=\"#\" id=\"edit\" db-id=").concat(i, " class=\"btn btn-outline-success\"> Edit</a>\n        ");
      idFilter.push(i);
      var _input = {
        id: i++,
        fullName: _fullName2.value,
        phoneNumber: _phoneNumber2.value,
        email: _email2.value,
        gender: _gender2.value
      };
      add(_input);
      alert('Contact Baru Telah Di Input');
    }

    clearForm();
  }

  ;
  var searchBar = document.forms['searchForm'].querySelector('input');
  searchBar.addEventListener('keyup', function () {
    var optionValue = document.getElementById('search_param').value;

    if (searchBar.value !== '') {
      //Jika yang dipilih filter by fullname
      if (optionValue === 'fullname') {
        idFilter.forEach(function (num, index) {
          var tr = document.getElementById("db-".concat(idFilter[index]));

          if (tr.cells[1].innerHTML === searchBar.value) {
            tr.style.display = "";
          } else {
            tr.style.display = "none";
          }
        }); //jika yang dipilih filter by Gender
      } else {
        idFilter.forEach(function (num, index) {
          var tr = document.getElementById("db-".concat(idFilter[index]));

          if (tr.cells[4].innerHTML === searchBar.value) {
            tr.style.display = "";
          } else {
            tr.style.display = "none";
          }
        });
      }
    }
  });
});
view();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49682" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map