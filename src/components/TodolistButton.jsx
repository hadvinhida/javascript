function TodolistButton(props) { 
    let id = props.id;
    let currentindex = props.tasks.findIndex((item)=>item.id == id)
    let prevIndex = currentindex - 1;
    let nextIndex = currentindex + 1;

    let prevButton = '';
    if(props.tasks[prevIndex] != undefined){
      prevButton = '👆';
    } else {
        prevIndex = '';
    }

    let nextButton = '';
    if(props.tasks[nextIndex] != undefined){
      nextButton = '👇';
    } else {
        nextIndex = '';
    }
    return (
        <>
            <span><button onClick={()=>props.move(currentindex, prevIndex)}>{prevButton}</button></span>
            <span><button onClick={()=>props.move(currentindex, nextIndex)}>{nextButton}</button></span>
            <span><button onClick={()=>props.remove(props.id)}>🗑️</button></span>
        </>
        
    )
}

export default TodolistButton