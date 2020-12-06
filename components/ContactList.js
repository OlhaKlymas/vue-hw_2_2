const ContactList = {
    components: {
        ContactItem
    },
    props: {
        contactList: {
            type: Array
        }
    },
    methods:{
        deleteItem(key){
            this.$emit('deleteContact', key)
        }
    },
    template: `
        <ol>
            <contact-item v-for="item in contactList" :key="item.id" :item="item" @deleteItem="deleteItem"></contact-item>
        </ol>
    `
}