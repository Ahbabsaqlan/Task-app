let todoContainer = document.getElementById('todo')
let statuss = document.getElementById('status')

const getData =()=>{
fetch('http://localhost:3000/api/todos/')
.then(response => response.json()) //parsing js from json
.then(data => { console.log(data)
  data.map(todo=>{
    let info= document.createElement("div")
    div.classlist.add("list")
    console.log(document.getElementsByClassName('list'))
    info.innerHTML="Todo: " + todo.todo+ "<br>" + "Status: "+ todo.status + "<br>"
    todoContainer.appendChild(info)
  })
})
.catch(err => console.error(err));
}
getData()
// const postData = fetch("http://localhost:3000/api/todos", {
// method: 'POST',
// headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json',
// },
// body: `{
//    "todo": "wake up at 6 am",
//    "status": "done",
//   }`,
// });

// response.json().then(data => {
//   console.log(data);
// });

