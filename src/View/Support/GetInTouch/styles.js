import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
    padding: 2em 0px;
    padding-bottom: 4em;
    ${maxQuery('md')} {
        padding-bottom: 2em;
    }
    div.ellipse--container {
        position: relative;
        margin: 2em 0px;
        img {
            position: absolute;
            left: 0px;
            top: -1.45rem;
        }
        h3 {
            padding-left: 1.4em;
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
        }
    }

    div.row--container {
        ${minQuery('md')} {
            display: flex;
            column-gap: 12%;
        }
        margin-top: 3.5em;
        div.col--1 {
            ${minQuery('md')} {
                width: 60%;
            }
            button {
                margin-top: 1.5em;
            }
        }
        div.col--2 {
            text-align: left;
            ${maxQuery('md')} {
                margin-top: 6.5em;
            }
            div {
                margin-bottom: 4em;
                ${maxQuery('md')} {
                    margin-bottom: 2.5em;
                }
                h3 {
                    margin-bottom: 1em;
                    font-weight: 400;
                    color: #fff;
                    font-size: 1.2rem;
                }
                p {
                    margin-bottom: 0.6em;
                    line-height: 150%;
                    font-size: 0.95rem;
                    a {
                        &, &:hover, &:focus {
                            text-decoration: none;
                            color: ${({ theme }) => theme.txtColor}
                        }
                        &:hover, &:focus {
                            text-decoration: none;
                            color:#fff;
                        }
                    }
                }
            }
        }
    }
`
