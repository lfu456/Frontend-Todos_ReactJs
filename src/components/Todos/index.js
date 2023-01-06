import { useEffect, useState , useRef} from "react"
import { getTodosAPI, delTodosAPI , addTodosAPI, editTodosAPI  } from "../../api/todos"



export const Todos = () =>{
    
   const [todos, setTodos] = useState([])
   const todoRef = useRef([]);
   const [textBtn, setTextBtn] = useState('Add new')
   
    useEffect(()=> {
        fetchData()
    }, [])


    const fetchData = async() => {
        setTodos(await getTodosAPI())
    }

    const delTodo = async (id) => {
      if (window.confirm("sau khi xoá không thể khôi phục, bạn có muốn xoá?")) {
        await delTodosAPI(id)
        fetchData()
      }
    }

    const editTodo = (id) => {

      todoRef?.current.forEach((item)=>{
        if(item.getAttribute("data-id") && item.getAttribute("data-id") !== String(id)){
          item.className = "fas fa-edit"
        }
      });


      const inputName = document.getElementById("name")
      const inputId = document.getElementById("id");
      if(todoRef?.current[id].className === "fas fa-edit"){
        todoRef.current[id].className = "fas fa-user-edit";
        setTextBtn("Cập nhật")
        inputName.value = todoRef.current[id].getAttribute("data-name")
        inputId.value = id
      } else {
        todoRef.current[id].className = "fas fa-edit"
        setTextBtn("Thêm mới")
        inputName.value = ""
        inputId.value = null
      }

    }


    const addOrEditTodo = async (e) => {
      e.preventDefault();
      const value = e.target[0].value;
      const id = e.target[1].value;
      
      if(id){
        await editTodosAPI({
          name:value,
          id:id
        })
      }
        else{
          await addTodosAPI({
            name:value
           
          })
          
        }
        fetchData()
    }

  const onIsConpleteTodo= async (todo)=> {
    await editTodosAPI({
      ...todo,
      isComplete:true

      })
      fetchData();
  }



    return (
        <main id="todolist">
        <h1>
          Danh sách
          <span>Việc hôm nay không để ngày mai.</span>
        </h1>
       {todos ?
        (todos?.map((item, key) => (
        <li className={item.isComplete ? "done": ""} key={key} onClick={()=>{onIsConpleteTodo(item)}}>
          <span >{item.name}</span>
          <div className="actions">
            <button className="btn-picto" type="button" onClick={()=>editTodo(item.id)}>
              <i className="fas fa-edit" ref={el => todoRef.current[item.id]=el} data-name={item.name} data-id={item.id}/>
            </button>
            <button className="btn-picto" type="button" aria-label="Delete" title="Delete" onClick={()=>delTodo(item.id)}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </li>
       ))) : (<p>Danh sách nhiệm vụ trống.</p> )
       }
        
       
        
        
        <form onSubmit={addOrEditTodo}>
          <label >Thêm nhiệm vụ mới</label>
          <input type="text" name="name" id="name" />
          <input   type="text" name="id" id="id"  style={{display:"none"}}/>
          <button type="submit">{textBtn}</button>
        </form>
      </main>
 )
};

