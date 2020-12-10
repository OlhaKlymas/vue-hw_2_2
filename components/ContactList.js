const ContactList = {
    components: {
        ContactItem
    },
    props: {
        liveList: {
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
            <contact-item v-for="item in liveList" :key="item.id" :item="item" @deleteItem="deleteItem"></contact-item>
        </ol>
    `
}