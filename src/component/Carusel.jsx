import "react-multi-carousel/lib/styles.css";
import logo from '../assets/primary banner.jpg'
import Carousel from "react-multi-carousel";
import './myPhoto.css'

export const Carusel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    }

    return (
        <div className={"w-100"}>
            <Carousel responsive={responsive} autoPlaySpeed={3000} autoPlay={true} beforeChange={1}>
                <div>
                    <img src={logo} alt=""/>
                    <div className={"div"}/>
                </div>
            </Carousel>
        </div>
    )
}