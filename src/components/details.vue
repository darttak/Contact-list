<template>
    <div>
        <modal modalHeading="Confirm Delete" :cond="showConfirmModal" @modalClose="showConfirmModal=false">
            <p>Are you sure you want to delete this field?</p>
            <button @click="deleteDetailsParam(clickedName), showConfirmModal = false">Yes</button>
            <button @click="showConfirmModal = false">No</button>
        </modal>
        <modal modalHeading="Edit Contact" :cond="showEditmModal" @modalClose="showEditmModal=false">
            <p>Edit</p>
            <input type="text" v-model="newValue">
            <button @click="editDetailsParam(clickedName), showEditmModal = false">Yes</button>
            <button @click="showEditmModal = false">No</button>
        </modal>
        <label for="paramName">Name your param</label>
        <input id="paramName" type="text" v-model="paramName">
        :
        <input type="text" placeholder="Parameter name..." v-model="paramValue">
        <button @click="addNewDetailsParam()">Add</button>
        <button type="button">Undo</button>
        <table class="nice-table">
            <tr>
                <th>Field Name</th>
                <th>Value</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr v-for="(value, name) in userData" :key="(value.id, name.id)">
                <td>{{name}}</td>
                <td>{{value}}</td>
                <td><button @click="showEditmModal = true; clickedName = name">Edit</button> </td>
                <td><button @click="showConfirmModal = true; clickedName = name">Delete</button> </td>
            </tr>
        </table>
        
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: "Details",
    data(){
        return {
            showConfirmModal: false,
            showEditmModal: false,
            paramName: "",
            paramValue: "",
            newValue: "",
        }
    },
    computed: {
    userData() {
        return this.$store.state.newContactArray.find(user => user.id == this.$route.params.id)
    }
    },
    methods: {
        ...mapMutations(["addUserDetails"]),
        addNewDetailsParam(){
            this.$set(this.userData, this.paramName.toLowerCase(), this.paramValue)
            this.addUserDetails(this.userData)
        },
        editDetailsParam(clickedName){
            this.$set(this.userData, clickedName, this.newValue)
            this.addUserDetails(this.userData)
        },
        deleteDetailsParam(name){
            this.$delete(this.userData, name)
            this.addUserDetails(this.userData)
        }
    }
}
</script>

<style scoped>

</style>