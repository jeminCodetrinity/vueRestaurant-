<template>
<Header />
<div class="container">
    <h1 class="m-3">Udpate Restaurant</h1>
    <div class="m-3">
        <label for="Name" class="form-label">Name</label>
        <input type="text" class="form-control" v-model="restaurant.name" id="Name" placeholder="Enter Name">
    </div>
    <div class="m-3">
        <label for="Address" class="form-label">Address</label>
        <input type="text" class="form-control" v-model="restaurant.address" id="Address" placeholder="Enter Address">
    </div>
    <div class="m-3">
        <label for="Contact" class="form-label">Contact</label>
        <input type="text" class="form-control" v-model="restaurant.contact" id="Contact" placeholder="Enter Contact">
    </div>
    <button class="btn btn-primary m-3" v-on:click="update">Submit</button>
</div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
    name: 'Add',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods:{
        async update() { 
            let result = await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });

            if (result.status == 200) {
                this.$router.push({name:'Home'});
            }
        }
    },
    async mounted() { 
        let result = await axios.get(`http://localhost:3000/restaurant/`+this.$route.params.id);
        this.restaurant = result.data;
    }
}
</script>
