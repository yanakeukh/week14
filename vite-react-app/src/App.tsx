import Toolbar from "./Toolbar"
import Sidebar from "./SideBar"
import SlideView from "./SlideView"
import ToolbarButton from "./ToolbarButton"
import Slidethumbnail from "./SlideThumbnail"
import "./index.css"
import image from './img/123.jfif'


const testslide = [
  {
    id: 2,
    order: 3,
    image: image
  }
]



export default function App() {
  return <div>
            <div className="container-fluid toolbar-box">
                <div className="w-50 button py-3 px-5 border bg-light"><ToolbarButton/></div>
                <div className="w-100 tool d-grid py-3 px-5 border bg-light"><Toolbar/></div>
                <div className="w-50 sideBar  d-grid py-3 px-5 border bg-light"><Sidebar/></div>
                <div className="w-50 sideview d-grid py-3 px-5 border bg-light"><SlideView/></div>
            </div>
            <div className="img-container">
                 <div className="w-50 p-5 slidenail d-grid py-3 px-5 border bg-light"><Slidethumbnail slide={testslide[0]}/></div>
                 <div className="w-50 p-5 slidenail d-grid py-3 px-5 border bg-light"><Slidethumbnail slide={testslide[0]}/></div>
                 <div className="w-50 p-5 slidenail d-grid py-3 px-5 border bg-light"><Slidethumbnail slide={testslide[0]}/></div>
            </div>
      
  </div>
}