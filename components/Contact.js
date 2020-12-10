const Contact = {
    components: {
        ContactList,
        AddContact,        
        SearchContact
    },
	data() {
        return {
            contactList: [
                {
                    id: 134565432,
                    name: 'Olha',
                    secname: 'Klymas',
                    phone: '+3801119922',
                    img: 'https://avatars3.githubusercontent.com/u/36168996?s=460&u=cfb6a2e4d96fe2829c0fb37451f79caaa7c542a8&v=4'
                },
                {   
                    id: 145654,
                    name: 'Oleg',
                    secname: 'Klymas',
                    phone: '+3801119922',
                    img: 'https://avatars3.githubusercontent.com/u/36168996?s=460&u=cfb6a2e4d96fe2829c0fb37451f79caaa7c542a8&v=4'
                }
            ],
            addContactContent: false,
            searchContactContent: false,
            showAllList: true,
            liveList: []
        }
    },
    created() {
        this.liveList = this.contactList
    },
    methods: {
        refresh(a){
            this.liveList = a          
        },
        addContactItem(newContact){
            this.contactList.push(newContact)
            this.liveList = this.contactList
        },
        deleteContact(i){    
            this.contactList.map(item => {
                if(item.id === i){
                    return this.contactList.splice(this.contactList.indexOf(item), 1);    
                }
                else{
                    return this.contactList
                }
            })
            this.liveList.map(item => {
                if(item.id === i){
                    return this.liveList.splice(this.liveList.indexOf(item), 1);    
                }
                else{
                    return this.liveList
                }
            })
        }
    },
    template: `
        <div class="contact-wrap">
            <div class="button-group">
                <button @click="addContactContent = false, searchContactContent = false, showAllList = true, liveList = contactList">Посмотреть все контакты</button>
                <button @click="addContactContent = true, searchContactContent = false, showAllList = true, liveList = contactList">Создать контакты</button>
                <button @click="searchContactContent = true, addContactContent = false, showAllList = false">Искать контакт</button>
            </div>
            <div v-if="(addContactContent || searchContactContent)">
                <add-contact v-if="addContactContent" :contactList="contactList" @addContactItem="addContactItem"></add-contact>
                <search-contact v-if="searchContactContent" :contactList="contactList" @deleteContact="deleteContact" @refresh="refresh"></search-contact>
            </div>
            <contact-list :liveList="liveList" @deleteContact="deleteContact"></contact-list>
        </div>
    `
}