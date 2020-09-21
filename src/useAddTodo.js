// import {reactive ,computed} from 'vue'
// function useAddTodo(){
//     let state = reactive({
//       todos:[ {name:'吃烧烤', done:false},{name:'打游戏', done:false}],
//       val:''
//     })
//     let total = computed(()=>state.todos.length)
//     function addTodo(){
//       state.todos.push({
//         done:false,
//         name:state.val
//       })
//       state.val = ''
//     }
//     return {state, total, addTodo}
// }
// export default useAddTodo
import {reactive, computed} from 'vue'
function useAddTodo(){
  let state =  reactive({
    todos:[{name:'卡特莉娜', done:false},{name:'卢卡斯', done:false}],
    val:''
  })
  let total = computed(()=>{state.todos.length})
  function addTodo(){
    state.todos.push({
      done:false,
      name:state.val
    })
  }
  return { state, total, addTodo}
}
export default  useAddTodo