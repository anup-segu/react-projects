var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var _user = {};
var UserStore = new Store(AppDispatcher);
