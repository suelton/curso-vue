/* eslint-disable no-console */
import Vue from "vue"
import Router from "vue-router"
import Inicio from "./components/Inicio.vue"
import Usuario from "./components/usuario/Usuario.vue"
import UsuarioLista from "./components/usuario/UsuarioLista.vue"
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue"
import UsuarioEditar from "./components/usuario/UsuarioEditar.vue"
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'

Vue.use(Router)

const router = new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { selector: to.hash }
        }
        return { x: 0, y: 0 }
    },
    routes: [{
            path: "/",
            name: "inicio",
            //component: Inicio
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: "/usuario",            
            //component: Usuario,]
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            props: true,
            children: [
                { path: "", component: UsuarioLista },
                { path: ":id", component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log("antes da rota UsuarioDetalhe")
                        next()
                    }
                 },
                { path: ":id/editar", component: UsuarioEditar, props: true, name: "editarUsuario" }
            ]
        },
        {
            path: "/redirecionar",
            redirect:  "/usuario" 
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log("[beforeEach] Rota alterada de", from.fullPath, "para", to.fullPath)
    next()
})

export default router