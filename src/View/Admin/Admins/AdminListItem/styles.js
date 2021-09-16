import Styled from 'styled-components'
import { maxQuery } from '../../../../helpers'

export default Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #272B4A;
    cursor: pointer;
    padding: 2em 1em;
    border: 0.688106px solid rgba(255, 255, 255, 0.1);
    border-radius: 2.77041px;
    div.img--container {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background: pink;
        margin-bottom: 1.2em;
    }
    h3 {
        font-weight: 500;
        font-size: 1rem;
        margin-bottom: 0.5em;
        color: rgba(255, 255, 255, 0.8);
    }
    p {
        font-size: 0.9rem;
        ${maxQuery('sm')} {
            font-size: 0.8rem;
        }
        :not(:last-child) {
            margin-bottom: 1em;
        }
        &:last-child {
            background: #6ABA6D;
            padding: 0.6em 1.5em;
        }
    }
    
`
