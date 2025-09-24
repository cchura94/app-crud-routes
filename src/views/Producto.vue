<template>
    <div>
        <h1>Productos</h1>
        <!--{{ producto }}-->
        <form>
            <label for="id">Ingrese id: </label>
            <input type="text" v-model="producto.id">
            <br>
            <label for="nombre">Ingrese Nombre: </label>
            <input type="text" v-model="producto.nombre">
            <br>
            <label for="precio">Ingrese Precio: </label>
            <input type="number" v-model="producto.precio">
            <br>
            <label for="imagen">Ingrese Imagen: </label>
            <input type="text" v-model="producto.imagen">
            <br>
            <button type="button" @click="funGuardarProducto">Guardar Producto</button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>POS</th>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>IMAGEN</th>
                    <th>ACCIÓN</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prod, pos) in productos">
                    <td>{{pos}}</td>
                    <td>{{ prod.id }}</td>
                    <td>{{ prod.nombre }}</td>
                    <td>{{ prod.precio }}</td>
                    <td>
                        <img :src="prod.imagen" alt="" width="100px">
                    </td>
                    <td>
                        <button @click="funEditarProducto(prod)">editar</button>
                        <button @click="funEliminarProducto(pos)">eliminar</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>

       <!-- {{ productos }} -->
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    const productos = ref([]);
    const producto = ref({});

    onMounted(() => {
        productos.value.push(
            {id: 1, nombre: "TECLADO", precio: 100, imagen: "https://www.electronicospormayorbolivia.com/wp-content/uploads/2023/01/TJ220905-2.jpg"},
            {id: 2, nombre: "MONITOR", precio: 1998.98, imagen: "https://www.asus.com/media/global/gallery/vsltpsbjltwzkumd_setting_xxx_0_90_end_2000.png"},
            {id: 3, nombre: "PARLANTES", precio: 359.95, imagen: "https://i.blogs.es/b74df8/asus-uboom-2_550/650_1200.jpg"}
        )
    });

    function funGuardarProducto(){
       
        const posicion = productos.value.findIndex(item => item.id === producto.value.id)

        if(posicion>-1){
            productos.value[posicion] = producto.value
        }else{
            productos.value.push(producto.value)
        }

        producto.value = {}
    }
    function funEditarProducto(prod){
        let mi_prod = {...prod}
        producto.value = mi_prod;
    }

    function funEliminarProducto(pos){
        if(confirm("Está seguro de eliminar el producto")){
            productos.value.splice(pos, 1);
        }
    }
</script>