import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from "../styles/HeaderStyles"

const Header = () => {
    return (
        <HeaderContainer>
            <div className='header__left'>
                <div className='label menuitem'>
                    <Link>Thinkfix</Link>
                </div>
                <div className='menuitem'>
                    <Link>Features</Link>
                </div>
                <div className='megamenu menuitem'>
                    <Link>Directors</Link>
                    <div className="megamenuitem">
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>
                        <div>
                            <img src="/images/avatar.png" alt="director" />
                            <span>Ahmed Bobboyi</span>
                            <span>Director of Academics</span>
                        </div>

                    </div>
                </div>
                <div className='menuitem'>
                    <Link>Projects</Link>
                </div>
                <div className='menuitem'>
                    <Link>About</Link>
                </div>

            </div>
            <div className='header__right'>
                <div className='menuitem'>
                    <Link>sign in</Link>
                </div>

            </div>

        </HeaderContainer>
    )
}

export default Header
