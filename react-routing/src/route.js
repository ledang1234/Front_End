import Home from "./pages/home/Home"
import About from "./pages/home/About"
import ListMovie from "./pages/home/ListMovie"
import HOC from "./HOC/index.js"
import HOOK from "./HOOK/index.js"
import Material from "./material/index.js"
import DashBoard from "./pages/admin/DashBoard"
import ThemNguoiDung from "./pages/admin/ThemNguoiDung"
import ThemPhim from "./pages/admin/ThemPhim"
import DetailMovie from "./pages/home/DetailMovie"



const routesHome = [
    {
        path:"/",
        exact:true,
        component:Home
    },
    {
        path:"/home",
        exact:false,
        component:Home
    },
    {
        path:"/about",
        exact:false,
        component:About
    },
    {
        path:"/list-movie",
        exact:false,
        component:ListMovie
    },
    {
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie
      },
    {
        path:"/hoc",
        exact:false,
        component: HOC
    },
    {
        path:"/hook",
        exact:false,
        component: HOOK
    },
    {
        path:"/material",
        exact:false,
        component: Material
    }

]
const routesAdmin = [
    {
        path: "./admin",
        exact: false,
        component: Admin
    },
    {
        path: "/admin/dashboard",
        exact: false,
        component: DashBoard
      },
      {
        path: "/admin/them-nguoi-dung",
        exact: false,
        component: ThemNguoiDung
      },
      {
        path: "/admin/them-phim",
        exact: false,
        component: ThemPhim
      }
   
]

export  {routesHome, routesAdmin}