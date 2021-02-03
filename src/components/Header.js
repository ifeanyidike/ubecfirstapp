import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from "../styles/HeaderStyles"

const Header = () => {
    return (
        <HeaderContainer>
            <div className='header__left'>
                <div className='label'>
                    <Link>Thinkfix</Link>
                </div>
                <div>
                    <Link>Features</Link>
                </div>
                <div>
                    <Link>customers</Link>
                </div>
                <div>
                    <Link>pricing</Link>
                </div>
                <div>
                    <Link>about us</Link>
                </div>
                <div>
                    <Link>Plus</Link>
                </div>
            </div>
            <div className='header__right'>
                <div>
                    <Link>sign in</Link>
                </div>
                <div>
                    <Link className='header__rightEnd'>Get started free</Link>
                </div>
            </div>

        </HeaderContainer>
    )
}

export default Header
