import Styled from 'styled-components'
import { maxQuery } from '../../../../../helpers'

export default Styled.div`
    background: #272B4A;
    border: 0.765294px solid #272B4A;
    border-radius: 8.74621px;
    /* height: 25rem; */
    margin-top: 3em;
    ${maxQuery('md')} {
        margin-top: 1.5em;
    }
    header {
        display: flex;
        padding: 1.5em;
        padding-bottom: 0px;
        align-items: center;
        justify-content: space-between;
        h3 {
            color: #fff;
            font-weight: 500;
        }
        select {
                background: #272B4A;
                border: 0.968627px solid rgba(255, 255, 255, 0.2);
                box-sizing: border-box;
                border-radius: 3.87451px;
            }
        }
    }
    div.chat--container {
        ${maxQuery('md')} {
            width: calc(100vw - 3em);
        }
        overflow-x: auto;
        div.context--container {
            position: fixed;
            transform: translateX(-50%) translateY(20%);
            z-index: 999;
            background: #1A1D31;
            border-radius: 4px;
            width: 10rem;
            button {
                font-weight: 400;
                color: rgba(255, 255, 255, 0.8);
                &.btn--delete {
                    color: #E04F5F;
                }
            }
        }
        div.padding--container {
            position: relative;
            color: #FFBE5D;
            padding-left: 1.8em;
            &::after {
                content: "";
                left: 0px;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 50%;        
                background: #F7F0DB;
            }
            &::before {
                content: "";
                left: 0.22em;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;        
                background: #FFBE5D;
                z-index: 1;
            }
        }
    }
   
`
