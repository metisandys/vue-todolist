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


new Vue({
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
		}]
	},
	computed: {
		remain: function() {
			console.log(filters.active(this.todos).length);
			return filters.active(this.todos).length;
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
		}
	}
})