// public Routes
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Search from "~/pages/Search"
import Upload from "~/pages/Upload"
import { OnlyHeader } from "~/components/layout"
const publicRoutes = [
    {path:"/", component: Home},
    {path:"/following", component: Following},
    {path:"/profile", component: Profile},
    {path:"/upload", component: Upload, layout : OnlyHeader},
    {path:"/search", component: Search, layout: null},
]

const privateRoutes = []

export {privateRoutes, publicRoutes}