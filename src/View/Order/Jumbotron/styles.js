import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
text-align: center;
color: #fff;
padding: 3.5em 0px;
padding-top: 1em;
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
    h1 {
        margin-bottom: 0.8em;
    }
    img {
        ${maxQuery('1308px')} {
            display: none;
        }
        position: absolute;
        left: 29%;
        top: -1.6em;
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
    margin-bottom: 3em;
    img {
        display: inline-block;
        width: 25%;
        ${maxQuery('md')} {
            width: 70%;
            max-width: 300px;
            margin-left: 2em;
        }
    }
}
div.input--group {
    display: flex;
    margin: 0 auto;
    /* transform: translateX(50%); */
    max-width: 70%;
         ${maxQuery('md')} {
            max-width:  100%;
            max-width: 700px;
        }
    input {
        border-radius: 5px 0px 0px 5px;
    }
    button {
background: rgb(255,123,13);
background: linear-gradient(106deg, rgba(255,123,13,1) 17%, rgba(255,156,64,1) 36%, rgba(121,83,51,1) 73%);
        border-radius: 0px 5px 5px 0px;
        border: none;
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
