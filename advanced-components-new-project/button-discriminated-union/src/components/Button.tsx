import React, { type ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    el: 'anchor'
} & ComponentPropsWithoutRef<'a'>


const Button = (props: ButtonProps | AnchorProps) => {
    if (props.el === 'button') {
          return <button className='button' {...props}></button>
    }
    return <a className='button' {...props}></a>

}

export default Button