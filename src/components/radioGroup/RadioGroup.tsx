import React from 'react'
import './RadioGroup.css'

type Props = {
  id: string,
  children: JSX.Element | JSX.Element[];
}

const RadioGroup: React.FC<Props> = ({
  id,
  children
}) =>  (
  <fieldset id={id} className="radio-group">
    { children }
  </fieldset>
)

export default RadioGroup