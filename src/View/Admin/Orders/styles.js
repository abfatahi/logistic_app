import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    header {
        margin-bottom: 3em;
        max-width: 40rem;
        div.top--row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 11rem;
            h2 {
                color: #fff;
            }
        }
        div.searchBar--container {
            margin-top: 1.5em;
        }
        div.filter--row {
            ${maxQuery('md')} {
                display: none;
            }
            background: #272B4A;
            border-radius: 5px;
            display: flex;
            margin-top: 1.5em;
            align-items: center;
            justify-content: space-evenly;
            hr {
                height: 1.5em;
                background-color: #ECECEC;
                width: 1px;
                border: none;
            }
            button {
                display: flex;
                align-items: center;
                padding: 1.2em 1em;
                font-size: 0.85rem;
                justify-content: center;
                color: rgba(255, 255, 255, 0.6);
                &:first-child, &:last-child {
                    svg {
                        margin-right: 0.5em;
                    }
                }
                 &:not(:first-child), &:not(:last-child) {
                    svg {
                        margin-left: 0.5em;
                    }
                }
                &.reset--btn {
                    color: #E04F5F;
                }
                &:not(.reset--btn) {
                    &:hover {
                        color: ${({ theme }) => theme.primary};
                        svg {
                            * {
                                fill: ${({ theme }) => theme.primary};
                            }
                        }
                    }
                }
            }
        }
    }
}

    div.admin--content__container {
        background: #272B4A;
        height: 100%;
        border: 0.765294px solid #272B4A;
        box-sizing: border-box;
        border-radius: 8.74621px;
        
    }
   
`
