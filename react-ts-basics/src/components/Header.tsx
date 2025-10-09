import React, { type PropsWithChildren } from 'react'

type HeaderProps = PropsWithChildren<{image: {
    src: string
    alt: string
}}>


// interface HeaderProps {
//     image: {
//         src: string
//         alt: string
//     }
//     children: ReactNode
// }

const Header = ({ image, children }: HeaderProps) => {
  return (
    <div>
        <img src={image.src} alt={image.alt} />
        {children}
    </div>
  )
}

export default Header