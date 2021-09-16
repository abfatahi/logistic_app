import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    form {
        padding-top: 1em;
        ${minQuery('md')} {
        padding: 0 2em;
        }
        div.forgotPassword--container {
            text-align: right;
            margin-top: 2em;
            button {
                padding: 0px;
                font-size: 0.9rem;
                font-weight: 500;
            }
        }
        button.auth--btn {     
            margin-top: 2em;       
            border-radius: 10px 0px;
            padding-top: 1.2em;
            padding-bottom: 1.2em;
            font-weight: 550;
        }
        footer {
            text-align: center;
            padding-top: 2.5em;
            font-size: 0.95rem;
            color: #FFFFFF;
            a {
                &, &:focus, &:visited {
                    text-decoration: none;
                    color: ${({ theme }) => theme.primary};
                }
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    } 
`
