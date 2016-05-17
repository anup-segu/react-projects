var _todos = {};
var _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach(function(cb) {
      return cb();
    });
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    _callbacks.splice(_callbacks.indexOf(cb), 1);
  },

  all: function() {
    var todoArr = [];
    for (var key in _todos) {
      todoArr.push(_todos[key]);
    }
    return todoArr.slice();
  },

  fetch: function() {
    var store = this;
    $.ajax({
      url: "/api/todos",
      method: "GET",
      success: function (todos) {
        store.resetTodos(todos);
        store.changed();
        return store.all();
      }
    });
  },

  create: function(data) {
    var store = this;
    $.ajax({
      url: "/api/todos",
      data: {todo: data},
      method: "POST",
      success: function (todo) {
        store.addTodo(todo);
        store.changed();
      }
    });
  },

  destroy: function(id) {
    var store = this;
    store.removeTodo(id);

    $.ajax({
      url: "/api/todos/" + id,
      method: "DELETE",
      success: function () {
        store.changed();
      }
    });
  },

  toggleDone: function(id) {
    var store = this;
    var done = _todos[id].done === true ? false : true;
    _todos[id].done = done;

    $.ajax({
      url: "/api/todos/" + id,
      data: {todo: {done: done}},
      method: "PATCH",
      success: function () {
        store.changed();
      }
    });
  },

  removeTodo: function(id) {
    delete _todos[id];
  },

  addTodo: function(todo) {
    _todos[todo.id] = todo;
  },

  resetTodos: function(todos) {
    todos.forEach( function(todo) {
      _todos[todo.id] = todo;
    });
  },


};

module.exports = TodoStore;
