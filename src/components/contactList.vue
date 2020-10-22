<template>
    <div>
        <modal modalHeading="Confirm Delete" :cond="showConfirmModal" @modalClose="showConfirmModal=false">
            <p>Are you sure you want to delete {{clickedContact.name}}?</p>
            <button @click="removeContact(clickedContact), showConfirmModal = false">Yes</button>
            <button @click="showConfirmModal = false">No</button>
        </modal>
        <PostForm/>
        <table class="nice-table">
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Delete</th>
                <th>Details</th>
            </tr>
            <tr v-for="contact in allContacts" :key="contact.id">
                <td>
                    {{contact.name}}
                </td>
                <td>{{contact.phoneNumber}}</td>
                <td><button class="delete" @click="showConfirmModal = true; clickedContact = contact">Delete</button></td>
                <td><button @click="shareData(contact)">Details</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import PostForm from './PostForm.vue'
export default {
    name: "contactList",
    components: {PostForm},
    data(){
        return {
            showConfirmModal: false,
            clickedContact: {}
        }
    },
    computed: mapGetters(['allContacts']),
    methods: {
    ...mapMutations(["deleteContact", "addUserDetails"]),
    removeContact(clickedContact) {
        console.log(this.$store.state.newContactArray)
        console.log(clickedContact)
      let index = this.$store.state.newContactArray.indexOf(clickedContact)
        if(index !== -1) {
        this.deleteContact(index)
        } else {
            alert("Елемент не найден!")
        }
    },
    shareData(contact){
        this.clickedContact = contact
        this.addUserDetails(contact)
        this.$router.push({name: "Details", params: {id: this.clickedContact.id}});
        },
  }
}
</script>

<style scoped>

</style>