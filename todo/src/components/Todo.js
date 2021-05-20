import react, { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {addTodo,deleteTodo,removeTodo} from '../actions/index'
import '../components/Todo.css';

const Todo =()=>{

    const[inputData , setInputData]=useState('');
const list = useSelector((state)=>state.todoReducer.list)

    // console.log(setInputData);

const dispatch = useDispatch();
    return(
        <>
        <div className="main_div">
          <div className="child_div">
            <figure>
            <figcaption>Add your List Here </figcaption>
            </figure>
            <div className="addItems">
              <input type="text" placeholder="Add items..." 
              value={inputData}
              onChange= {(event)=>setInputData(event.target.value)}
              
              />
              <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData),setInputData(''))}></i>
            </div>
            <div className="showItems">
                {
                    list.map((elem) => {
                        return(
                        <div className="eachItems" key={elem.id}>
                            <input type="text" value={elem.data}/>
                {/* {elem.data}</h3> */}
                <i className="fa fa-trash" title="delete items" onClick={() =>
                     dispatch(deleteTodo(elem.id))}></i>
                 </div>
                        )
                    })
                }
            
            </div>
          </div>
        </div>
        </>
    )
}
export default Todo;