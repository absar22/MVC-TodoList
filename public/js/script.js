
const deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('/todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



const todoLeft = document.querySelectorAll('span.not')

Array.from(todoLeft).forEach(element => {
    element.addEventListener('click', markComplete )
})


async function markComplete(){
   const todoId = this.parentNode.dataset.id
   try{
    const response = await fetch('/todos/markComplete', {
    method: "PUT",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        'todoIdFromJSFile': todoId
    })
})

    const data = await response.json()
    console.log(data)
    location.reload()

   }catch(err){

    console.log(err)
   }
}

const todoCompleted = document.querySelectorAll('span.completed')

Array.from(todoCompleted).forEach(element => {
 element.addEventListener('click', markInComplete)
})

async function markInComplete(){
    const todoId = this.parentNode.dataset.id
    try{
      const response = await fetch ('/todos/markInComplete', {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({
            'todoIdFromJSFile': todoId
        })
       
      })
      const data = await response.json()
      console.log(data)
      location.reload()
    }catch(err){
       console.log(err)
    }
}
    