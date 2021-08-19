import React  from "react"
import './Hero.css'

interface Props {
    title: string,
    subTitle?: string
    backgroundColor?: string,
    backgroundImage?: string,
    maxHeight?: string,
    children?: JSX.Element | JSX.Element[];
    filterColor?: string,
    filterOpacity?: number
}

const Hero: React.FC<Props> = ({
    title,
    subTitle,
    backgroundImage,
    backgroundColor,
    maxHeight,
    children,
    filterColor,
    filterOpacity,
}: Props) => {

    return (
        <section 
            className="hero"
            data-testid="hero"
            style={{
                backgroundColor: backgroundColor, 
                backgroundImage: `url(${backgroundImage})`,
                maxHeight: maxHeight,
            }}
        >
            <h1 data-testid="title">{ title }</h1>
            {
                subTitle
                ? <p data-testid="subTitle">{ subTitle }</p>
                : ''
            }

            {
                children
            }
            <span 
                className="hero__bg-filter"
                data-testid="hero__bg-filter"
                style={{
                    backgroundColor: filterColor, 
                    opacity: `${filterOpacity}`,
                }}
            />
        </section>
    )
}

export default Hero