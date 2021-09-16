import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
padding: 10em 0px;
padding-top: 2.5em;
font-size: 0.9rem;
position: relative;
  div.ellipse--container {
        position: relative;
        margin: 2em 0px;
        margin-bottom: 4em;
        img {
            position: absolute;
            left: 0px;
            top: -1.52em;
        }
        h3 {
            padding-left: 1.4em;
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.8);
        }
    }
   div.grid--container {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr;
       grid-gap: 2.5em;
       ${maxQuery('lg')} {
            grid-template-columns: 1fr 1fr;
       }
        ${maxQuery('sm')} {
            grid-template-columns: 1fr;
            justify-items: center;
       }
       div.customer--container {           
            background: #313446;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-sizing: border-box;
            border-radius: 10px;
            padding: 1.5em;
            ${maxQuery('sm')} {
                max-width: 24rem;
            }
            div.row {
                display: flex;
                align-items: center;
                margin-bottom: 1em;
                ${maxQuery('md')} {
                    flex-direction: column;
                }
                h3 {
                    color: #fff;
                    font-weight: 500;
                    font-size: 1.1rem;
                }
                img {
                    display: block;
                    margin-right: 1em;
                    ${maxQuery('md')} {
                     margin-bottom: 1em;
                    }
                }
            }
            p {
                line-height: 180%;
            }
       }
   }
   
img.ellipsePattern--img {
    position: absolute;
    top: -25.5%;
    left: 100%;
    /* transform: translateX(100%); */
}
img.ellipsePattern--img__2 {
    position: absolute;
    bottom: 0%;
    left: -19vw;
}
`
