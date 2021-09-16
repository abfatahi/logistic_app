import Styled from 'styled-components'
import { rem } from 'polished'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
padding: 3em 0px;
position: relative;

div.row--one {
    ${minQuery('md')} {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
column-gap: 7.5em;
justify-content: space-between;
div.reasons {
    color: rgba(255, 255, 255, 0.7);
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
    p {
        padding-left: 1.5em;
        margin-top: 2.5em;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.7);
    }
}
div.pattern--container {
    display: flex;
    img {
        height: 50em;
    }
}
}

section {
    padding-top: 3.5em;
    ${maxQuery('md')} {
    margin: 0px 2em;
    }
    div.pallet--container {
        display: flex;
        position: relative;
        ${maxQuery('>md')} {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
        }
        &.section--right {
            justify-content: flex-end;
        }
        &:not(:last-child) {
            margin-bottom: 4.2em;
            ${maxQuery('>md')} {
                margin-bottom: 2.5em;
            }
        }
        
        div.pallet--row {
        background: #313446;
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 2em;
        display: flex;
        align-items: center;
        width: 70%;
        ${maxQuery('>md')} {
            width: 100%;
        }
        max-width: 770px;
        
        ${maxQuery('md')} {
            flex-direction: column;
        }
        img.string--right {
            position: absolute;
            top: 50%;
            right: 0px;
            transform: translateX(100%) translateY(-20%);
            ${maxQuery('<md')} {
                display: none;
            }
        }
        img.string--left {
            position: absolute;
            top: 50%;
            left: 0px;
            transform: translateX(-100%) translateY(-20%);
            ${maxQuery('<md')} {
                display: none;
            }
        }
        div.img--container {
            position: relative;
            background: pink;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;            
            background: rgba(26, 29, 49, 0.6);
            box-shadow: 0px 20px 30px rgba(22, 14, 14, 0.25);
            border-radius: 8px;
            text-align: center;
            width: ${rem('150px')};
            height: ${rem('135px')};
            ${minQuery('lg')} {
                margin-right: 3em;
            }
            h3 {
            font-weight: 400;
            margin-top: 0.5em;
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.8);
            }
            p.action--point {
                top: 0px;
                transform: translateY(-45%);
                position: absolute;
                background: #313446;
                box-shadow: 30px 20px 30px 6px rgba(22, 14, 14, 0.15), inset 0px 1.8px 2px rgba(33, 32, 32, 0.05);
                border-radius: 5px;
                padding: 0.5em 1.2em;
                color: ${({ theme }) => theme.primary};
                font-weight: 600;
                left: 50%;
                font-size: 1rem;
            }
        }

        div.content--container {
            ${minQuery('>md')} {
                width: calc(100% - 10rem);
            }
            ${maxQuery('>md')} {
                margin-top: 2em;
            }
            h2 {
                margin-bottom: 0.7em;
                font-weight: 450;
                font-size: 1.3rem;
                color: rgba(255, 255, 255, 0.8);
                 ${maxQuery('>md')} {
                text-align: center;
            }
            }
            p {
                line-height: 150%;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.6);
            }
        }
    }
}
div.section--right p.action--point{
  top: 100%!important;
}
}
img.ellipsePattern--img {
    position: absolute;
    top: -13.5%;
    ${maxQuery('md')} {
        display: none;
    }
}
`
