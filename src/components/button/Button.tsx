import React from 'react'
import './Button.css'

interface Props {
    buttonId: string,
    clickHandle: (id: string) => void,
    disabled?: boolean,
    text?: string,
    theme?: 'dark' | 'light',
}

export const Button: React.FC<Props> = ({
    buttonId,
    disabled,
    text='click',
    theme='light',
    clickHandle,
}) => {
    const buttonClicked: React.MouseEventHandler = (event) => {
        clickHandle(event.currentTarget.id)
    }
    return (
    <button 
        className={`button button--${theme}`}
        onClick={buttonClicked} 
        id={buttonId}
        data-testid={buttonId}
        disabled={disabled}
    >{text}</button>
)}