//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

//関数
async function getUsers (){
    //データのやり取り
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return users;
}
//関数
  async function addList(user) {
    const list = document.createElement('li');
    list.textContent = user.name;
  
    const Lists = document.getElementById('lists');
    Lists.appendChild(list);
  }

  //関数
  async function listUsers () {
    const users = await getUsers();
    users.forEach(addList);
}

//イベント
window.addEventListener('load',listUsers);

button.addEventListener('click',listUsers);


