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
		    for (const [key, value] of Object.entries(item)) {
                    let val = `${value}`
                    if(val.includes(a)){                    
			this.findText = true
                    	this.count++
                    	this.searchContactList.push(item)
                    }
                }
            })
            this.showContent = true
            this.$emit('refresh', this.searchContactList)
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
        </form>
    `
}
