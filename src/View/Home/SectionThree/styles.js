import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
padding: 5em 0px;
position: relative;
${minQuery('lg')} {
    display: flex;
    column-gap: 4em;
    justify-content: space-between;
    align-items: center;
}
img.dotted--float {
    position: absolute;
    top: 0px;
    left: 74vw;
}
&::after {
    content: "";
    height: 100%;
    z-index: -1;
    position: absolute;
    background: rgba(20, 23, 45, 0.7);
    width: 200vw;
    left: -100vw;
    top: 0px;
}
div.col--1 {
    h2 {
        color: rgba(255, 255, 255, 0.8);
        line-height: 150%;
        font-weight: 600;
    }
    p {
        margin: 1.5em 0px;
        margin-bottom: 2em;
        line-height: 180%;
        color: rgba(255, 255, 255, 0.6);
    }
    button {
        display: flex;
        align-items: center;
        padding: 0.7em 2em;
        .icon {
            font-size: 1.4rem;
            margin-left: 0.2em;
        }
    }
}
div.col--2 {
    ${maxQuery('lg')} {
        margin-top: 1.5em;
        text-align: center;
        img {
            width: 90%;
            max-width: 600px;
            height: 90%;
        }
    }
}
`
