const ContactItem = {
    props: {
        item: {
            type: Object
        }
    },
    data(){
    	return{
    		showMore: false
    	}
    },
    methods:{
    	showMoreBtn(){
    		this.showMore = true
    	},
        deleteItem(){
            this.$emit('deleteItem', this.item.id)
        }
    },
    template: `
        <li>
	        <span>{{ item.name }} {{ item.secname }}</span>
	        <button v-if="!showMore" @click="showMoreBtn">Подробнее</button>
	        <button v-else @click="showMore=false">Скрыть</button>
	        <button @click="deleteItem">X</button>
	        <div v-show="showMore" v-for="(value, key) in item">
	        	<p><span>{{ key }}:</span> {{ value }}</p>
	        </div>
        </li>
    `
}