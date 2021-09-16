import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
    padding: 2em 0px;
${minQuery('lg')} {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 7.5em;
    justify-content: space-between;
}
position: relative;
&::before {
    content: "";
    z-index: -1;
    position: absolute;
    background: rgba(20, 23, 45, 0.7);
    height: 100%;
    width: 200vw;
    left: -100vw;
    top: 0px;
}

div.reasons {
    color: rgba(255, 255, 255, 0.7);
    ${maxQuery('lg')} {
        margin-bottom: 2.5em;
    }
    div.ellipse--container {
        position: relative;
        margin: 2em 0px;
        img {
            position: absolute;
            left: 0px;
            top: -1.45rem;
            ${maxQuery('md')} {
                top: -1.58rem;
            }
            ${maxQuery('sm')} {
                top: -1.78rem;
            }
        }
        h3 {
            padding-left: 1.4em;
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
        }
    }
    p {
        padding-left: 1.5em;
        margin-top: 2.5em;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.7);
    }
}
div.points--container {
    display: flex;
    ${minQuery('lg')} {
        justify-content: space-between;
        height: 52rem;
    }
    ${maxQuery('lg')} {
        margin: 0px auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    div.keyPoints--container {
        width: 18rem;
        ${maxQuery('lg')} {
            width: 100%;
            max-width: 350px;
        }
        text-align: center;
        padding: 2em 1em;
        background: #313446;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        margin-bottom: 2.2em;
        h3 {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.8em;
            font-weight: 500;
            font-size: 1.1rem;
            margin-top: 0.6em;
        }
        p {
            color: rgba(255, 255, 255, 0.6);
            line-height: 180%;
            font-size: 0.9rem;
            text-align: left;
        }
    }
    div.points--col__2 {
        ${minQuery('lg')} {
            margin-left: 2em;
            align-self: flex-end;
        }
    }
}
`
