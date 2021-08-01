import React from 'react'
import './Button.css'

interface Props {
    buttonId: string,
    buttonType?: 'button' | 'submit' | 'reset' | undefined,
    clickHandle: (id: string) => void,
    disabled?: boolean,
    text?: string,
    theme?: 'dark' | 'light',
}

const Button = ({
    buttonId,
    buttonType = 'button',
    clickHandle,
    disabled,
    text='click',
    theme='light',
}: Props) => {
    const buttonClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        clickHandle(event?.currentTarget?.id)
    }
    return (
        <button
            className={`button button--${theme}`}
            onClick={event => buttonClicked(event)} 
            id={buttonId}
            data-testid={buttonId}
            disabled={disabled}
            type={buttonType}
        >
            {text}
        </button>
    )
}

export default Button