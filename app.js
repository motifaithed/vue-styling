const app = Vue.createApp({
    data(){
        return{
            boxSelectedA: false,
            boxSelectedB: false,
            boxSelectedC: false,
        }
    },
    methods:{
        selectBox(box){
            console.log(box);
            if(box === 'A'){
                this.boxSelectedA =  true;
                this.boxSelectedB =  false;
                this.boxSelectedC =  false;
            }else if(box === 'B'){
                this.boxSelectedA =  false;
                this.boxSelectedB =  true;
                this.boxSelectedC =  false;
            }else{
                this.boxSelectedA =  false;
                this.boxSelectedB =  false;
                this.boxSelectedC =  true;
            }
        }
    }
});

app.mount('#styling');