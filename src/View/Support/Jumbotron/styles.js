import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
text-align: center;
color: #fff;
padding: 3.5em 0px;
padding-top: 1em;
position: relative;
${maxQuery('md')} {
padding-bottom: 0px;
}
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
    h1 {
        margin-bottom: 0.5em;
    }
    img {
        ${maxQuery('1308px')} {
            display: none;
        }
        position: absolute;
        left: 36%;
        top: -1em;
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
    margin-bottom: 2em;
    img {
        display: inline-block;
        /* width: 30%; */
        ${maxQuery('md')} {
            width: 80%;
            max-width: 400px;
        }
    }
}
img.dottedBox--img {
    position: absolute;
    left: -10%;
    bottom: 0px;
    ${maxQuery('md')} {
        display: none;
    }
}
`
