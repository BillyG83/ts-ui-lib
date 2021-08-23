import React  from "react"
import './Hero.css'

interface Props {
    backgroundColor?: string,
    backgroundImage?: string,
    children?: JSX.Element | JSX.Element[];
    filterColor?: string,
    filterOpacity?: number
    maxHeight?: string,
    subTitle?: string
    title: string,
}

const Hero: React.FC<Props> = ({
    backgroundColor,
    backgroundImage,
    children,
    filterColor,
    filterOpacity,
    maxHeight,
    subTitle,
    title,
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