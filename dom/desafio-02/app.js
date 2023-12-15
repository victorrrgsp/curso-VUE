new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        somar() {
            alert('Estou te alertando!')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
    }
})