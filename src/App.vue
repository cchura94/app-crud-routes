<template>
 <RouterLink to="/">INICIO</RouterLink> | 
 <RouterLink to="/blog">BLOG</RouterLink> |
 <RouterLink to="/productos">PRODUCTOS</RouterLink>
 

 <RouterView />
 

</template>

<script setup>
import Blog from './views/Blog.vue';
import Inicio from './views/Inicio.vue';
import Producto from './views/Producto.vue';
</script>
