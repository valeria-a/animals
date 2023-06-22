import { useState } from "react"
import Arrows from "../Arrows/Arrows"
import Image from "../Image/Image"

const Content = ({picturesList}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    return(
        <>
            <Image pictureUrl={picturesList[currentIndex]}/>
            <Arrows />
        </>
    )
}

export default Content