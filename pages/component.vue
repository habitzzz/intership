<template>
    <NuxtLayout name="client">
        <template #header>
            <TheHeader />
        </template>
        <FooButton @click="goToCms()" >button ke CMS</FooButton>
        <FooButton @click="button1()">button default</FooButton>
        <FooButton type="primary" @click="button2()">button primary</FooButton>
        <FooButton disabled="true" >button disabled</FooButton>
    </NuxtLayout>
</template>

<script setup>
function button1() {
    alert("Hello world!");
}

function button2() {
    alert("Horayyyyyy!");
}

function goToCms() {
    navigateTo('/cms')
}

</script>