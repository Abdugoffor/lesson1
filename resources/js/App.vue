<template>
    <div>
        <router-link :to="{ name: 'home' }">Home | </router-link>
        <router-link :to="{ name: 'dashbord' }"> Dashbord | </router-link>
        <router-link :to="{ name: 'login' }"> Login | </router-link>
        <router-link :to="{ name: 'registr' }"> Registr | </router-link>
    </div>
    <router-view></router-view>
</template>
