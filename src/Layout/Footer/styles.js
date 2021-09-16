import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
padding: 3em 0px;
padding-bottom: 2em;
position: relative;
font-size: 0.9rem;
&::after {
    content: "";
    position: absolute;
    top: 0px;
    height: 100%;
    background: rgba(20, 23, 45, 0.7);
    z-index: -1;
    width: 200vw;
    left: -100vw;
}
hr {
    margin-top: 5em;
    margin-bottom: 1em;
    border: none;
    border-top: 1.5px solid rgba(255, 255, 255, 0.1);
}
div.grid--container {
    display: grid;
    column-gap: 5em;
    grid-template-columns: repeat(3, 1fr);
    ${maxQuery('md')} {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 2em;

    }
    div.grid--item {
        &:first-child {
            p {
                line-height: 150%;
            }
        }
        h3 {
            margin-bottom: 1.5em;
            color: #fff;
            font-weight: 500;
            font-size: 1.1rem;
        }
        p {
            margin-bottom: 1em;
        }
        a {
            &, &:hover, &:focus {
                text-decoration: none;
                color: ${({ theme }) => theme.txtColor}
            }
        }
    }
}

div.grid--bottom {
    color: #FFFFFF;
    a {
        &, &:hover, &:focus {
            text-decoration: none;
            color: #FFFFFF!important;
            &:not(:last-child) {
                margin-right: 0.3em;
            }
            &:not(:first-child) {
                margin-left: 0.3em;
            }
        }
    }
}
`
