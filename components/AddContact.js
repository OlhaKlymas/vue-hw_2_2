const AddContact = {
    props: {
        contactList: {
            type: Array
        }
    },
	data() {
        return {
		newContact: {
			id: '',
			name: '',
			secname: '',
			phone: '',
			img: ''
		}
        }
    },
    methods: {
        addContact(){
            this.newContact.id = Math.floor(Math.random() * Math.floor(9000000))
            this.$emit('addContactItem', this.newContact)
		this.newContact = {
			id: '',
			name: '',
			secname: '',
			phone: '',
			img: ''
		}
        }
    },
    template: `
        <form>
            <div>
                <labeL>Имя</labeL>
                <input type="text" v-model="this.newContact.name">
            </div>
            <div>
                <labeL>Фамилия</labeL>
                <input type="text" v-model="this.newContact.secname">
            </div>
            <div>
                <labeL>Номер телефона</labeL>
                <input type="text" v-model="this.newContact.phone">
            </div>
            <div>
                <labeL>Картинка</labeL>
                <input type="text" v-model="this.newContact.img">
            </div>
            <div>
                <button @click.prevent="addContact">Добавить</button>
            </div>
        </form>
    `
}
