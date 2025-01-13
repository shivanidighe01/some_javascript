
const todos=[];
const addTodo=()=>{
    todos.push({
        title:document.querySelector('input').value
    });
    document.querySelector('input').value="";
    render();
}

const deleteTodo=(ind)=>
{
    todos.splice(ind,1);
    render();
}
const comp=(todo,ind)=>{
    const div=document.createElement('div');
    const h3=document.createElement('h3');
    const btn=document.createElement('button');

    h3.innerHTML=todo.title;
    btn.innerHTML='Delete';

    h3.style.paddingTop='10px';
    btn.style.height='35px';
    btn.style.width='100px';
    // btn.style.marginBottom='10px';


    div.appendChild(h3);
    div.appendChild(btn);


    div.setAttribute('onclick','deleteTodo('+ind+')');
    div.style.width='400px';
    div.style.margin='10px';
    div.style.display='flex';
    div.style.justifyContent='space-between';


    return div;
}

const render=()=>{
    document.querySelector('#todos').innerHTML="";
    for(let i=0;i<todos.length;i++)
    {
        const todo=todos[i];
        const div=comp(todo,i);
       
        document.querySelector('#todos').appendChild(div);
    }
}