import React, { useState } from 'react'
import { Button } from '../button/Button'
import { UserInterface } from '../interface'

export const Form = () => {
    const [ user, setUser ] = useState<UserInterface | null>(null)

    const fetchUser = () => setUser({
        name: 'Bill',
        age: 37,
        country: 'Spain',
        address: {
            street: 'Calle Tornado',
            number: 2,
            zip: '123456',
        },
        admin: false,
    })

    const handleClick = (data: string) => {
        fetchUser()
        console.log('button ID: ' + data);
    }

    return (
        <div>
            <Button buttonType="submit" buttonId="data-button" text="get data" clickHandle={handleClick} />
            {
                user && <p>Welcome {user?.name}</p>
            }
        </div>
    ) 
} 