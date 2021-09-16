import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
text-align: center;
color: #fff;
padding: 3.5em 0px;
position: relative;
img.floating--img {
    position: absolute;
    ${maxQuery('lg')} {
        display: none;
    }
    &.img--left__top {
        left: 0px;
    }
    &.img--left__bottom {
        left: 10%;
        top: 55%;
    }
    &.img--right__top {
        right: 0px;
    }
    &.img--right__bottom {
        right: 10%;
        top: 55%;
    }
}
h1 {
    font-weight: 700;
    font-size: 2.8rem;
    color: rgba(255, 255, 255, 0.95);
}
h2 {
    font-weight: 400;
    font-size: 1.1rem;
}
div.ellipse--container {
    position: relative;
    margin: 2em 0px;
    margin-bottom: 2.5em;
    ${maxQuery('>lg')} {
        width: 90%;
        margin: 2em auto;
    }
    img {
        ${maxQuery('1308px')} {
            display: none;
        }
        position: absolute;
        left: 21%;
        top: -1.3em;
        /* ${maxQuery('>lg')} {
            left: -10%;
        top: 1rem;
        } */
    }
    h2 {
        line-height: 160%;
    }
}
div.img--container {
    text-align: center;
    img {
        display: inline-block;
        ${maxQuery('md')} {
            width: 100%;
            margin-left: 2em;
            height: 100%;
        }
    }
}
button {
    display: inline-flex;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.6em 4em;
    align-items: center;
    .icon {
    font-size: 1.8rem;
    margin-left: 0.2em;
    }
}
img.dottedBox--img {
    position: absolute;
    left: -10%;
    bottom: 0px;
    ${maxQuery('md')} {
        display: none;
    }
    ${maxQuery('md')} {
        display: none;
    }
}
`
