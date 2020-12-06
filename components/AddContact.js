const AddContact = {
    props: {
        contactList: {
            type: Array
        }
    },
	data() {
        return {
            newContactName: '',
            newContactSecName: '',
            newContactTel: '',
            newContactImg: ''
        }
    },
    methods: {
        addContact(){
            let newContact = {}
            newContact.id = Math.floor(Math.random() * Math.floor(9000000))
            newContact.name = this.newContactName
            newContact.secname = this.newContactSecName
            newContact.phone = this.newContactTel
            newContact.img = this.newContactImg
            this.$emit('addContactItem', newContact)
        }
    },
    template: `
        <form>
            <div>
                <labeL>Имя</labeL>
                <input type="text" v-model="newContactName">
            </div>
            <div>
                <labeL>Фамилия</labeL>
                <input type="text" v-model="newContactSecName">
            </div>
            <div>
                <labeL>Номер телефона</labeL>
                <input type="text" v-model="newContactTel">
            </div>
            <div>
                <labeL>Картинка</labeL>
                <input type="text" v-model="newContactImg">
            </div>
            <div>
                <button @click.prevent="addContact">Добавить</button>
            </div>
        </form>
    `
}