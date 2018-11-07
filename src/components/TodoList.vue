<template>
  <div class="todolist">
    <Form ref="formInline" :model="form" inline>
        <FormItem prop="user">
            <Input type="text" v-model="form.todo" placeholder="Username"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="addtodo">Add Todo</Button>
        </FormItem>
    </Form>
    <h3> TodoList </h3>
    <Table :columns="columns1" :data="todolist"></Table>
  </div>
</template>

<script>
import TodoListLogic from '../abi/todolist'
export default {
  name: 'addtodo',
  data () {
    return {
      form: {
        todo: undefined
      },
      todolist: [],
      columns1: [
        {
          title: 'Ids',
          key: 'ids'
        },
        {
          title: 'Todo Contents',
          key: 'contents'
        },
        {
          title: 'Owner',
          key: 'owners'
        },
        {
          title: 'Unix timestamp',
          key: 'timestamps'
        },
        {
          title: 'isCompleted',
          key: 'isCompleteds',
          align: 'center',
          render: (h, params) => {
            let dataStates = params.row.isCompleteds
            if (!dataStates) {
              return h('Button', {
                props: {
                  type: 'warning',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.markAsCompleted(params.row.ids)
                  }
                }
              }, 'Mark as Done')
            } else {
              return h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                }
              }, 'Completed')
            }
          }
        }

      ]
    }
  },
  beforeCreate: function () {
    TodoListLogic.init().then(() => {
      this.returnAllTodos()
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    addtodo: function () {
      if (typeof this.form.todo !== 'undefined' && this.form.todo !== '') {
        TodoListLogic.addTodo(this.form.todo).then(tx => {
          console.log(tx)
        })
        .then(() => {
          this.form.todo = ''
          this.returnAllTodos()
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    markAsCompleted: function (todoId) {
      TodoListLogic.markTodoAsCompleted(todoId, window.web3.eth.accounts[0]).then(() => {
        this.returnAllTodos()
      })
    },
    returnAllTodos: function () {
      TodoListLogic.returnAllTodos(window.web3.eth.accounts[0]).then((todoList) => {
        this.todolist = todoList
      })
    }
  }
}
</script>

<style scoped>

</style>
