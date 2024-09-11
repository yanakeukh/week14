
import image from './img/123.jfif'


export default function Slidethumbnail({slide}: {slide: {order: number, image: string}}) {
    return <div className='images inline-flex'>
        <span>{slide.order}</span>
        <img src={slide.image} onClick={() => alert("Selected!")}/>
    </div>
}