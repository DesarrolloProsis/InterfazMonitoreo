<template>
  <Navbar></Navbar>
  <h1 class="title">Lista de Usuarios Registrados</h1>
  <div class="container mx-auto px-0 pb-24 pt-4">
    <div class="flex flex-wrap bg-blue">
      <div class="flex-none filter-style">
        Nombre:
        <input type="text" />
      </div>
      <div class="flex-none filter-style">
        Estatus:
        <select class="flex-none filter-style color-black" name="select">
          <option value="100" selected>Inactivo</option>
          <option value="200">Activo</option>
        </select>
      </div>
      <div class="flex-none filter-style">
        <button class="btn-buscar">Buscar</button>
      </div>
      <div class="flex-1">
        <button class="btn-carriles ml-right">Descargar Excel</button>
      </div>
    </div>
    <TablaListaUsuarios :dataUsuarios="perfiles"></TablaListaUsuarios>
  </div>
  <Footer></Footer>
</template>
<script>
import TablaListaUsuarios from "../../components/Tabla-listausuarios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer-login";
import axios from "axios";
export default {
  components: {
    TablaListaUsuarios,
    Navbar,
    Footer,
  },
  data() {
    return {
      /*perfiles: [
        {
          nombre: "Rodrigo",
          apellido: "Mendoza",
          rol: "Sistemas",
          estatus: true,
        },
        {
          nombre: "Alex",
          apellido: "Mendoza",
          rol: "Sistemas",
          estatus: false,
        },
        {
          nombre: "MIguel",
          apellido: "Mendoza",
          rol: "Sistemas",
          estatus: false,
        },
      ],*/
      perfiles:[]
    };
  },
  beforeMount() {
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    // Get token config
    if(getCookie("Token")){
      let config = {
        headers: {
          'Authorization': 'Bearer ' + getCookie("Token")
        }
      }
      axios.get("http://prosisdev.sytes.net:86/api/Usuario?Page=1&Rows=5", config)
      .then((result)=>{
        result.data.forEach(e =>{
          let obj = {
            nombre: e.Nombre,
            apellido: e.ApellidoPaterno,
            rol: e.Rol,
            estatus: e.Estatus,
          }
          this.perfiles.push(obj)
        })
      })
    }
  }
};
</script>
<style scoped>
.title {
  text-align: center;
  font-size: 25px;
  padding-top: 20px;
}
.bg-blue {
  background-color: #0195b0;
  padding: 10px 5px;
}
.filter-style {
  color: white;
  font-size: 16px;
  margin-left: 10px;
}
.filter-style input {
  margin-left: 20px;
  color: black;
  border: 1px solid black;
  padding: 0px 5px;
}
.ml-right {
  display: block;
  margin-left: auto;
  margin-right: 10px;
}
.btn-carriles {
  background-color: #017296;
  color: white;
  font-size: 15px;
  height: 100%;
  padding: 0px 5px;
  border: 1px solid black;
  border-radius: 5px;
}
.btn-carriles:focus {
  outline: 0;
}
.btn-buscar {
  background-color: #017296;
  color: white;
  height: 100%;
  padding: 0px 5px;
  border-radius: 5px;
}
.btn-buscar:focus {
  outline: 0;
}
.color-black {
  color: black !important;
}
.color-black:focus {
  outline: 0;
}
@media (max-width: 750px) {
  .title {
    font-size: 20px;
    padding-bottom: 20px;
  }
  .filter-style {
    padding-top: 5px;
    padding-bottom: 15px;
  }
  .btn-carriles {
    background-color: #017296;
    color: white;
    font-size: 15px;
    padding: 10px 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>
