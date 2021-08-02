import React  from "react"
import './Hero.css'

interface Props {
    title: string,
    subTitle?: string
    backgroundColor?: string,
    backgroundImage?: string,
    maxHeight?: string,
}

const Hero: React.FC<Props> = ({
    title,
    subTitle,
    backgroundImage,
    backgroundColor,
    maxHeight,
}: Props) => {

    return (
        <section 
            className="hero" 
            style={{
                backgroundColor: backgroundColor, 
                backgroundImage: `url(${backgroundImage})`,
                maxHeight: maxHeight,
            }}
        >
            <h1>{ title }</h1>
            {
                subTitle
                ? <p>{ subTitle }</p>
                : ''
            }
        </section>
    )
}

export default Hero