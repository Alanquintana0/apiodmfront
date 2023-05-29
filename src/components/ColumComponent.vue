<template>
    <div>
        <h2>Crea una columna</h2>
        <form @submit.prevent="createColumn">
            <div class="col-12">
                <label class="form-lable">Title</label>
                <input v-model="column.title" type="text" class="form-controll" placeholder="Title" required>
            </div>
            <div class="col-12"  v-for="(backlog,index) in column.backlogs" :key="index">
                <label class="form-lable">Backlog de la columna</label>
                <select v-model="selectedBacklog" class="form-control" required>
                    <option disabled value="">Please select</option>
                    <option v-for="backlog in getBacklogs" :key="backlog._id" :value="backlog._id">
                        {{ backlog._title }}
                    </option>
                </select>
            </div>
            <div class="col-6">
                <button type="button" @click="addBacklog">Add Backlog</button>
            </div>
        </form>
        <div class="col-6">
                <button type="button" @click="createColumn">crear Columna</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
    import axios from 'axios';
    export default{
        data(){
            return {
                column:{
                    title:"",
                    backlogs:[""]
                },
                getBacklogs:[],
                selectedBacklog:""
            }
        },
        methods:{
            async createColumn(){
                axios.post("https://api1-a329927.b4a.run/columns",this.column)
                     .then(console.log("column created"))
            },
            addBacklog(){
                this.column.backlogs.push("");
            }
        },
        created() {
            axios.get("https://api1-a329927.b4a.run/backlogs")
                 .then(response => {
                    this.getBacklogs = response.data.obj;
                 }).catch(err =>  {
                    console.log(err);
                 })
        }
    }

</script>

<style scoped>

</style>