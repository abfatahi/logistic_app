import Styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import { maxQuery } from '../../../../helpers'

export default Styled(Div100vh)`
height: 100vh;
background: #272B4A;
${maxQuery('lg')} {
    position: fixed;
    z-index: 999;
    width: 100vw;
    background: rgba(39, 43, 74, 0.5);
    -webkit-backdrop-filter: blur(0px);
}
div.sideNav--content {
    display: flex;
    flex-direction: column;
    height: 100vh;
    ${maxQuery('lg')} {
        width: ${({ theme }) => theme.dashSideNavWidth};
        flex-basis: ${({ theme }) => theme.dashSideNavWidth};
        background: #272B4A;
        box-shadow: 0px 3px 6px #00000029;
    }
    header {
    button.toggleMenu--btn {
        display: none;
        ${maxQuery('lg')} {
            display: inline-block;
        }
        .icon {
            font-size: 2rem;
            margin-right: 1em;
            color: #fff;
        }
    }
    padding: 0px 2em;
    display: flex;
    align-items: center;
    height: ${({ theme }) => theme.dashTopNavHeight};
}
nav {
    padding-top: 3em;
    padding-bottom: 3em;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
        display: flex;
        align-items: center;
        padding: 0.6em 2em;
        user-select: none;
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
        &:hover, &.active {
            background: #1B203A;
            color: ${({ theme }) => theme.primary};
            svg {
                * {
                    fill: ${({ theme }) => theme.primary};
                }
            }
        }
        svg {
            margin-right: 1em;
        }
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    div.nav--footer {
        button {
        display: flex;
        align-items: center;
        padding: 0.6em 2em;
        user-select: none;
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        border: none;
        background: transparent; 
        color: rgba(255, 255, 255, 0.8);
        svg {
            margin-right: 1em;
        }
        &:not(:last-child) {
            margin-bottom: 1em;
        }
        }
    }
}
}

`
