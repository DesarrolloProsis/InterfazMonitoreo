<template>
  <div class="container mx-auto px-0 pt-4 py-8">
    <div class="flex flex-wrap bg-blue">
      <div class="flex-none filter-style">
        Tramo:
        <select class="flex-none filter-style color-black" name="select">
          <option value="100" selected>opcion1</option>
          <option value="200">opcion2</option>
          <option value="300">opcion3</option>
        </select>
      </div>
      <div class="flex-none filter-style">
        Plaza:
        <select class="flex-none filter-style color-black" name="select">
          <option value="100" selected>opcion1</option>
          <option value="200">opcion2</option>
          <option value="300">opcion3</option>
        </select>
      </div>

      <div class="flex-none filter-style">
        <button class="btn-buscar">Buscar</button>
      </div>
      <div class="flex-1">
        <router-link to="/inicio/monitoreo-carriles/bitacora-alarmas" tag="div">
          <button class="btn-carriles ml-right">Bitácora de Alarmas</button>
        </router-link>
      </div>
    </div>
    <div class="flex ta-center overflow-x-auto pt-6">
      <div
        class="flex justify-center items-center flex-none bg-carriles-gray p-5"
      >
        <div>Plaza:<br />Tlalpan</div>
      </div>
      <div class="flex flex-col flex-none">
        <div class="flex-1 bg-carriles-gray mh-cuerpo lh-cuerpo">Cuerpo</div>
        <div class="flex-1 bg-carriles-gray mh-other">Lecturas Válidas</div>
        <div class="flex-1 bg-carriles-gray mh-other">Lecturas Inválidas</div>
        <div class="flex-1 bg-carriles-gray mh-other">Último Cruce</div>
      </div>
      <Carril :carrilesdata="carriles"></Carril>
    </div>
  </div>
</template>
<script>
import Carril from "../components/Carril";

export default {
  name: "TablaCarriles",
  components: {
    Carril,
  },
  data() {
    return {
      carriles: [
        {
          cuerpo: "A01",
          status: "Red",
          lectura_valida: "1280",
          lectura_invalida: "1180",
          ultimo_cruce: "11:10",
        },
        {
          cuerpo: "A02",
          status: "Red",
          lectura_valida: "1280",
          lectura_invalida: "1180",
          ultimo_cruce: "11:10",
        },
      ],
    };
  },
};
</script>
<style scoped>
.color-black {
  color: black !important;
}
.color-black:focus {
  outline: 0;
}
.ta-center {
  text-align: center;
}

.bg-carriles-gray {
  background-color: #d6e8eb;
  border: 1px solid black;
}

.mh-cuerpo {
  min-height: 80px;
  padding: 10px;
}
.lh-cuerpo {
  line-height: 59px;
}
.mh-other {
  min-height: 20px;
  line-height: 20px;
  padding: 10px;
}
.bg-blue {
  background-color: #0195b0;
  padding: 10px 5px;
}
.ml-right {
  display: block;
  margin-left: auto;
  margin-right: 10px;
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
.btn-carriles {
  background-color: #017296;
  color: white;
  font-size: 15px;
  height: 100%;
  padding: 0px 5px;
  border: 1px solid black;
  border-radius: 5px;
}
.btn-buscar {
  background-color: #017296;
  color: white;
  height: 100%;
  padding: 0px 10px;
  border-radius: 5px;
  border: 1px solid black;
}
.btn-buscar:focus {
  outline: 0;
}
.btn-carriles:focus {
  outline: 0;
}
@media (max-width: 769px) {
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
