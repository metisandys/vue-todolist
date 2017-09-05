import 'todomvc-app-css/index.css';

import Vue from 'vue';

var filters = {
	all(todos) {
		return todos
	},
	active(todos) {
		return todos.filter((todo) => {
			return !todo.completed
		})
	},
	completed(todos) {
		return todos.filter((todo) => {
			return todo.completed
		})
	}
}


let app = new Vue({
	el: '.todoapp',
	data: {
		title: 'todo-list',
		newTodo: '',
		todos: [{
			content: 'vue',
			completed: false
		}, {
			content: 'vuex',
			completed: false
		}],
		hashName: 'all'
	},
	computed: {
		remain: function() {
			return filters.active(this.todos).length;
		},
		isAll: {
			get: function() {
				return this.remain === 0;
			},
			set: function(value) {
				this.todos.forEach((todos) => {
					todos.completed = value;
				});
			}
		},
		filteredTodos() {
			return filters[this.hashName](this.todos);
		}
	},
	methods: {
		addTodo(e) {
			this.todos.push({
				content: this.newTodo,
				completed: false
			});
			this.newTodo = '';
		},
		removeTodo(index) {
			this.todos.splice(index, 1);
		},
		clear() {
			this.todos = filters.active(this.todos);
		}
	}
})

function hashChange() {
	let hashName = location.hash.replace(/#\/?/, '');
	if (filters[hashName]) {
		app.hashName = hashName;
	} else {
		location.hash = '';
		app.hash = 'all';
	}
}

window.addEventListener('hashchange', hashChange)