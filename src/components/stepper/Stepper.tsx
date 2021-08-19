import React from 'react'
import './Stepper.css'

interface Props {
    title: String
}

const Stepper: React.FC<Props> = ({
    title,
}) => {
    return(
        <div className="stepper">
            <h3>{title}</h3>
        </div>
    )
}

export default Stepper