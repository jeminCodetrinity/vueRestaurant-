<template>
    <Header/>
    
	<h1 class="text-center m-3">Restaurant List</h1>
    <table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Address</th>
			<th>Contact</th>
			<th>Active</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="value in restaurants">
			<td>{{value.id}}</td>
			<td>{{value.name}}</td>
			<td>{{value.address}}</td>
			<td>{{value.contact}}</td>
			<td>
				<router-link :to="'/update/'+value.id" class="btn btn-primary">Update</router-link>

				<button class="btn btn-danger" v-on:click='deleteData(value.id)'>Delete</button>
			</td>

		</tr>
	</tbody>
    </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
    name:'Home',
    components:{
        Header
    },
    data(){
        return {
            restaurants:[]
        }
    },
    methods: {
		async deleteData(id){
			let result = await axios.delete(`http://localhost:3000/restaurant/`+id);
			if (result.status == 200) {
				this.load();
			}
		},
		async load(){
			let result = await axios.get(`http://localhost:3000/restaurant`);
			this.restaurants = result.data;
			let login = localStorage.getItem('signUp');
			if (!login) {
				this.$router.push({
					name: 'Register'
				});
			}
		}
    },
    async mounted() { 
       this.load();
    }
}
</script>

<style>
body {
	margin: 1rem;
}

table {
	--accent-color: #362f4b;
	--text-color: slategray;
	--bgColorDarker: #ececec;
	--bgColorLighter: #fcfcfc;
	--insideBorderColor: lightgray;
	width: 100%;
	margin: 0;
	padding: 0;
	border: 1px solid var(--accent-color);
	border-collapse: collapse;
	color: var(--text-color);
	table-layout: fixed;
}

table caption {
	margin: 1rem 0;
	color: slategray;
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 0.055rem;
	text-align: center;
}

table thead tr {
	color: whitesmoke;
	background-color: var(--accent-color);
	font-size: 1rem;
}

table tbody tr {
	border: 1px solid var(--insideBorderColor);
	background-color: var(--bgColorDarker);
}

table tbody tr:nth-child(odd) {
	background-color: var(--bgColorLighter);
}

table th {
	letter-spacing: 0.075rem;
}

table th,
table td {
	padding: 0.75rem 1rem;
	font-weight: normal;
	text-align: left;
}

@media screen and (max-width: 768px) {
	table {
		border: none;
	}

	table caption {
		padding: 0.75rem 1rem;
		border-radius: 6px 6px 0 0;
		color: whitesmoke;
		font-size: 1.35rem;
		background-color: var(--accent-color);
	}

	table thead {
		position: absolute;
		width: 1px;
		height: 1px;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	table tbody tr {
		margin-bottom: 2rem;
		display: block;
	}

	table td {
		font-size: 0.875rem;
		text-align: right;
		display: block;
	}

	table td:before {
		content: attr(data-label);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.075rem;
		text-transform: uppercase;
		float: left;
		opacity: 0.5;
	}

	table td:not(:last-child) {
		border-bottom: 1px solid var(--insideBorderColor);
	}
}
</style>