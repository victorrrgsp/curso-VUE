<template>
    <div id="app">
        {{ titulo }}
        <button @click="titulo += '#'">Aumentar</button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            titulo: 'Teste Data usando Vue js!!'
        }
    }
}
</script>

<style>
    #app{
        background-color: chocolate;
        color: #fff;
    }
</style>