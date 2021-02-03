import styled from 'styled-components'
import { device, colors } from '../utils/definitions'


export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-bottom: 1px solid ${colors.headerBorder};
    a{
        text-transform: uppercase;
        text-decoration: none;
        color: ${colors.black};
        font-size: 0.9rem;
        
    }
    
    .header__left{
        display: flex;
        flex: 0.6;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        div{
            height: 100%;
            width: 100%;
            border-right: 1px solid ${colors.headerBorder};
            display: grid;
            place-items: center;
            &:hover{
                border-bottom: 2px solid ${colors.white}
            }
            
        }
        
        
    }
    .header__right{
        display: flex;
        flex: 0.4;
        align-items: center;
        justify-content: flex-end;
        height: 100%;

        div{
            height: 100%;
            border-right: 1px solid ${colors.headerBorder};
            display: grid;
            place-items: center;
            &:hover{
                border-bottom: 2px solid ${colors.white}
            }
            a{
                padding-right: 25px;
            }
            a.header__rightEnd{
                border-right: none;
                padding-left: 25px;
            }
        }
        
    }
`