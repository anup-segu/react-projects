var _steps = {};
var _callbacks = [];

var StepStore = {
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

  all: function(todo_id) {
    return _steps[todo_id].slice();
  },

  fetch: function(todo_id) {
    var store = this;
    $.ajax({
      url: "/api/todos/"+ todo_id + "/todo_steps",
      method: "GET",
      success: function (steps) {
        store.resetSteps(steps, todo_id);
        store.changed();
      }
    });
  },

  create: function(data) {
    var store = this;
    $.ajax({
      url: "/api/todos/" + data["todo_id"] + "/todo_steps",
      data: {todo_step: data},
      method: "POST",
      success: function (step) {
        store.addStep(step);
        store.changed();
      }
    });
  },

  destroy: function(step) {
    var store = this;
    store.removeStep(step);

    $.ajax({
      url: "/api/todo_steps/" + step.id,
      method: "DELETE",
      success: function () {
        store.changed();
      }
    });
  },

  addStep: function(step) {
    if (_steps[step.todo_id] === undefined) {
      _steps[step.todo_id] = [];
    }

    _steps[step.todo_id].push(step);
  },

  resetSteps: function(steps, todo_id) {
    steps.forEach( function(step) {
      if (_steps[todo_id] === undefined) {
        _steps[todo_id] = [];
      }

      _steps[todo_id].push(step);
    });
  },

  removeStep: function(step) {
    _steps[step.todo_id] =
      _steps[step.todo_id].splice(_steps[step.todo_id].indexOf(step),1);
  }

};

module.exports = StepStore;
