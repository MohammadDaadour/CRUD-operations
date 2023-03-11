let name = document.getElementById("name");
let age = document.getElementById("age");
let job = document.getElementById("job");
let search = document.getElementById("search");

let mems;

if (localStorage.memdata != null) {
  mems = JSON.parse(localStorage.memdata);
} else {
  mems = [];
}

function create() {

    if(name.value != "", age.value != "" , job.value != ""){
  let mem = {
    name: name.value,
    age: age.value,
    job: job.value,
  };
  mems.push(mem);
  localStorage.setItem("memdata", JSON.stringify(mems));
  show();
  clear();
}
}

function clear() {
  name.value = "";
  age.value = "";
  job.value = "";
}

function show() {
  let table = "";
  for (let i = 0; i < mems.length; i++) {
    table += `<tr>
          <td>${mems[i].name}</td>
          <td>${mems[i].age}</td>    
          <td>${mems[i].job}</td>
          <td><button onclick = "del(${i})">Delete</button></td>
          </tr>`;
  }
  document.getElementById("table").innerHTML = table;
}

show();

function del(i) {
  mems.splice(i, 1);
  localStorage.memdata = JSON.stringify(mems);
  show();
}

function searchdata() {
  let table = "";

  for (let i = 0; i < mems.length; i++) {
    if (mems[i].name.toLowerCase().includes(search.value)) {
      table += `<tr>
          <td>${mems[i].name}</td>
          <td>${mems[i].age}</td>    
          <td>${mems[i].job}</td>
          <td><button onclick = "del(${i})">Delete</button></td>
          </tr>`;
    }

  }
  document.getElementById("table").innerHTML = table;
}

function searchByJob() {
  let x = "";
  for (let i = 0; i < mems.length; i++) {
    if (
      mems[i].job
        .toLowerCase()
        .includes(document.getElementById("searchByJob").value)
    ) {
      x += `<tr>
        <td>${mems[i].name}</td>
        <td>${mems[i].age}</td>    
        <td>${mems[i].job}</td>
        <td><button onclick = "del(${i})">Delete</button></td>
        </tr>`;
    }
  }
  document.getElementById("table").innerHTML = x;
}
