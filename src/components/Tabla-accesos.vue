<template>
  <div class="responsive-table">
    <table class="tftable">
      <tr>
        <th>Usuario</th>
        <th>Fecha Inicio</th>
        <th>Fecha Fin</th>
      </tr>
      <tr v-for="(accesos, index) in dataAccesos" :key="index">
        <td>{{accesos.usuario}}</td>
        <td>{{accesos.fecha_inicio}}</td>
        <td>{{accesos.fecha_fin}}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "TablaAccesos",
  props: ["dataAccesos"],
};
</script>
<style scoped>

.responsive-table {
    padding-top: 20px;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 600px;
  
}
.tftable {
  font-size: 12px;
  color: #333333;
  width: 100%;
}
.tftable th {
  font-size: 14px;
  background-color: #2ED0E1;
  border-width: 5px;
  padding: 8px;
  border-style: solid;
  border-color: white;
  text-align: left;

  font-weight: 400;
  text-align: center;
  border-radius: 15px;
  margin: 3px;
  color: white;
}

.tftable td {
  font-size: 14px;
  border-bottom-width: 2px;
  border-left-width: 5px;
  border-right-width: 5px;
  border-top-width: 2px;
  padding: 8px;
  border-style: solid;
  border-bottom-color: #a1a1a1;
  border-left-color: white;
  border-right-color: white;
  
  text-align: center;
}

</style>