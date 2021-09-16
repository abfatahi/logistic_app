import Styled, { keyframes } from 'styled-components'
import { rem } from 'polished'
import { maxQuery } from '../../helpers'

const slideIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export default Styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    /* animation: ${slideIn} 0.2s ease-in-out; */
    top: 0px;
    left: 0px;
    z-index: 999;
    background: rgba(39, 43, 74, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    /* -webkit-backdrop-filter: blur(0.7px); */

    div.modal--container {
        background: #1B203A;
        /* box-shadow: 0px 0px 30px #00000029; */
        border-radius: 5px;
        width: ${rem('620px')};
        position: relative;
        button.close-btn {
            position: absolute;
            top: 1.5em;
            right: 1.5em;
            background: #fff;
            z-index: 1000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.1em;
            font-size: 1.2rem;
            color: #272B4A;
            ${maxQuery('md')} {
                position: fixed; 
            }
        }
        h2.modal--title {
            padding: 1em;
            font-weight: 500;
            border-bottom: 1px solid #E5E5E5;
        }
        footer.modal--footer {     
            border-top: 1px solid #E5E5E5;
            padding: 1.5em;
        }
    }
    div.modal--close__relative button.close-btn {
            top: 1.2em;
            right: 1.2em;
            position: absolute;
    }
    div.modal--size__sm {        
        width: ${rem('373px')};
        /* height: ${rem('485px')}; */
    }
    div.modal--size__md {        
        width: ${rem('811px')};
    }
`
