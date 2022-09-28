import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div>
          {/*Social Icons */}<SocialIcon url="https://twitter.com/jaketrent" />
        </div>
    </header>
  )
}

export default Header