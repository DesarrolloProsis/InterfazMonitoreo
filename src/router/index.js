import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import Login from "@/views/Login.vue";
import Menu from "@/views/Menu.vue";
import MonitoreoServicios from "@/views/Modules/MonitoreoServicios.vue";
import MonitoreoCarriles from "@/views/Modules/MonitoreoCarriles.vue";
import BitacoraAlarmas from "@/views/Modules/BitacoraAlarmas.vue";
import MonitoreoCruces from "@/views/Modules/MonitoreoCruces.vue";
import EnvioTransacciones from "@/views/Modules/EnvioTransacciones.vue";
import BusquedaCruces from "@/views/Modules/BusquedaCruces.vue";
import BitacoraAccesos from "@/views/Modules/BitacoraAccesos.vue";
import EstatusTags from "@/views/Modules/EstatusTags.vue";
import Configuracion from "@/views/Modules/Configuracion.vue";
import PerfilUsuario from "@/views/Modules/PerfilUsuario.vue";
import AdminPerfiles from "@/views/Modules/AdminPerfiles.vue";
import ListaUsuarios from "@/views/Modules/ListaUsuarios.vue";
import RegistroUsuarios from "@/views/Modules/RegistroUsuarios.vue";

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



const routes = [{
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      requiresCookie: false
    },
    beforeEnter: (to, from, next) => {
      if (getCookie("TipoUser") != "" && getCookie("Token")) {
        let config = {
          headers: {
            'Authorization': 'Bearer ' + getCookie("Token")
          }
        }
        axios.get("http://prosisdev.sytes.net:86/api/Test", config)
          .then((result) => {
            console.log("Validando Token...")
            console.log(result)
            next("/inicio")
          })
          .catch((error) => {
            //TODO: Borrar las cookies para redirigir al login
            document.cookie = "TipoUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
            document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
            console.log("Error Validando Token...")
            console.log(error)
            next()
          })
      } else {
        document.cookie = "TipoUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
        document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
        next();
      }
    }
  },
  {
    path: "/inicio",
    name: "Menu",
    component: Menu,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/monitoreo-servicios",
    name: "MonitoreoServicios",
    component: MonitoreoServicios,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/monitoreo-carriles",
    name: "MonitoreoCarriles",
    component: MonitoreoCarriles,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/monitoreo-carriles/bitacora-alarmas",
    name: "BitacoraAlarmas",
    component: BitacoraAlarmas,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/monitoreo-cruces",
    name: "MonitoreoCruces",
    component: MonitoreoCruces,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/envio-transacciones",
    name: "MonitoreoTransacciones",
    component: EnvioTransacciones,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/busqueda-cruces",
    name: "BusquedaCruces",
    component: BusquedaCruces,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/bitacora-accesos",
    name: "BitacoraAccesos",
    component: BitacoraAccesos,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/inicio/estatus-tags",
    name: "EstatusTags",
    component: EstatusTags,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    component: Configuracion,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/configuracion/perfil-usuario",
    name: "PerfilUsuario",
    component: PerfilUsuario,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/configuracion/administracion-perfiles",
    name: "AdministracionPerfilUsuario",
    component: AdminPerfiles,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/configuracion/lista-usuarios",
    name: "ListaUsuarios",
    component: ListaUsuarios,
    meta: {
      requiresCookie: true
    }
  },
  {
    path: "/configuracion/registro-usuarios",
    name: "RegistroUsuarios",
    component: RegistroUsuarios,
    meta: {
      requiresCookie: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresCookie)) {
    if (getCookie("TipoUser") != "" && getCookie("Token") != "") {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + getCookie("Token")
        }
      }
      axios.get("http://prosisdev.sytes.net:86/api/Test", config)
        .then((result) => {
          console.log("Validando Token...")
          console.log(result)
          next();
        })
        .catch((error) => {
          //TODO: Borrar las cookies para redirigir al login
          document.cookie = "TipoUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
          document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
          console.log("Error Validando Token...")
          console.log(error)
          next('/')
        })
    } else {
      document.cookie = "TipoUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
      document.cookie = "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "SameSite=None; Secure;";
      next('/')
    }
  } else {
    next();
  }
})

export default router;