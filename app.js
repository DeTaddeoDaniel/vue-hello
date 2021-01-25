// Stampare a schermo un messaggio all’interno di 
// un h1, utilizzando i data.


// // Bonus: Aggiungere un’immagine presa anch’essa
//  da un data assieme al valore alt dell'attributo.

// Poi aggiungete all'immagine una classe sempre 
// presa dal data.

var app = new Vue({
    
    el: '#root',
    
    data: {
        title: 'Ciao, sono un titolo da vue',
        urlImage: 'https://www.voglioviverecosi.com/wp-content/uploads/2019/05/VIVERE-A-CONTATTO-CON-LA-NATURA-1900x1080.jpg',
        altImage: 'Sono  una foto',
        classText: 'width100'
    },

    methods:{
        classeDinamica(value){
            console.log('change width to '+value)
            this.classText= 'width'+value;
        }
    }
    
});