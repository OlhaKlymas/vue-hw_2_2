const SearchContact = {
    components: {
        ContactItem,
        ContactList
    },
    props: {
        contactList: {
            type: Array
        }
    },
	data() {
        return {
            searchContactInput: '',
            findText: false,
            showContent: false,
            count: 0,
            searchContactList: []
        }
    },
    methods: {
        searchContact(){
            this.findText = false
            this.count = 0
            this.searchContactList.length = 0
            this.contactList.map(item =>{
                if(item.name.includes(this.searchContactInput) || item.secname.includes(this.searchContactInput) || item.phone.includes(this.searchContactInput)){
                    this.findText = true
                    this.count++
                    this.searchContactList.push(item)
                }
            })
            this.showContent = true
        },
        deleteItem(i){    
            this.searchContactList.map(item => {
                if(item.id === i){
                    return this.searchContactList.splice(this.searchContactList.indexOf(item), 1);    
                }
                else{
                    return this.searchContactList
                }
            })

            this.$emit('deleteContact', i)
        }
    },
    template: `
        <form>
            <div>
                <p>Введите имя (фамилию или номер)</p>
                <input type="text" v-model="searchContactInput">
                <button @click.prevent="searchContact">Поиск</button>
            </div>
            <div v-if="showContent">
                <p v-if="!findText">Такого контакта нет</p>
                <p v-if="findText">Найдено {{ count }} контакта</p>
            </div>
            <ol>
                <contact-item v-for="item in searchContactList" :item="item" :key="item.id" @deleteItem="deleteItem"></contact-item>
            </ol>
        </form>
    `
}