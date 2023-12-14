new Vue({
    el: '#desafio',
    data: {
        name: 'Victor Gabriel',
        idade: '18',
        imagem: 'https://www.designerd.com.br/wp-content/uploads/2019/04/imagens-blogs-chamar-atencao-publico-fb.jpg',
        link: 'http://google.com.br'
    },
    methods: {
        idadeMult: function(){
            return this.idade * 3
        },
        numeroAle: function () {
            return Math.random()
        }
    }
})