import Styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'
import { maxQuery, minQuery } from '../../helpers'

const animate = keyframes`
from {
    height: 0px;
    opacity: 0;
}
to {
    height: 100vh;
    opacity: 1;
}
`

const animate2 = keyframes`
from {
    height: 100vh;
    opacity: 1;
}
to {
    height: 0px;
    opacity: 0;
}
`

export default Styled.div`
position: fixed;
width: 100vw;
left: 0px;
top: 0px;
z-index: 1;
background: ${({ theme }) => theme.bgColor};
div.navigation--container {
    width: 95%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.maxWidth};
    ${maxQuery('md')} {
    width: 90%;
    }
    ${maxQuery('sm')} {
    width: 85%;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({ theme }) => theme.navHeight};
    ${maxQuery('md')} {
        height: ${({ theme }) => theme.smNavHeight};
    }
    div.brandLogo--container {
        width: 9rem;
        cursor: pointer;
        ${maxQuery('md')} {
            width: 8rem;
        }
        ${maxQuery('md')} {
            width: 120px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    button.nav--btn {  
        background: transparent;
        padding: 0px;
        height: 40px;
        border: none;
        
        span {
            width: 25px;
            position: relative;
            background: #fff;
            margin-top: 10px;
            height: 2px;
            background: #fff;
            border-radius: 10px;
            display: block;
             &::after {
                position: absolute;
                top: -8px;
                content: "";
                width: 25px;
                background: #fff;
                background: orange;
                height: 2px;
                border-radius: 10px;
                display: block;
            }
            &::before {
                content: "";
                position: absolute;
                width: 25px;
                top: -16px;
                background: #fff;
                border-radius: 10px;
                height: 2px;
                display: block;
            } 
        }
        &.open {
            span {
                background: ${({ theme }) => theme.bgColor};
                &::after {
                    opacity: 1;
                    transform: rotate(45deg) scale(1.2);
                }
                &::before {
                    transform: rotate(-45deg) scale(1.2);
                    top: -8px;
                }
            }
        }
        ${minQuery('lg')} {
            display: none;
        }
    }
    nav {
        ${maxQuery('lg')} {
            visibility: hidden;
        }
        user-select: none;
        div {
            display: inline-block;
            &:not(:last-child) {
                margin-right: 2.5em;
            }
            ${maxQuery('lg')} {
                display: block;
            }
            a {
                &:hover, &:focus, & {
                text-decoration: none;
                    font-weight: 500;
                    font-size: 15px;
                    color: rgba(255, 255, 255, 0.8);       
                    }
              
                &.active {
                    color: ${({ theme }) => theme.primary};
                }
            }
            
            &:last-child {
                cursor: pointer;
                background: ${({ theme }) => theme.primary}; 
                padding: 0.5em 0.8em;
                    border-radius: 5px;
                    &:hover {
                background: ${({ theme }) => lighten(0.1, theme.primary)}; 
                    } 
            }
        }
        
        ${maxQuery('lg')} {
            width: 100vw;
            position: fixed;
            left: 0px;
            background:  ${({ theme }) => theme.bgColor};
            top: ${({ theme }) => theme.navHeight};
            ${maxQuery('md')} {
                top: ${({ theme }) => theme.smNavHeight};
            }
            padding: 2em;
            div {
                display: block;
                margin-bottom: 2.5em;
                &:last-child {
                    text-align: center;
                    padding: 1em;
                }
            }
            a:last-child {
                text-align: center;
            }
            
        &.nav--mobile {
            visibility: visible;
            overflow-y: auto;
            padding-bottom: 4em;
            opacity: 0;
            animation: ${animate} 0.5s; 
            animation-fill-mode: forwards;
        }
        
        &.nav--mobile__close {
            visibility: visible;
            pointer-events: none;
            animation: ${animate2} 0.5s; 
            animation-fill-mode: forwards;
        }
        }
    }
}
`
