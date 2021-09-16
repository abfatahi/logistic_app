import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
    padding: 2em 0px;
    position: relative;
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
div.grid--container {
    display: grid;
    margin-top: 3em;
    padding-bottom: 2em;
    grid-template-columns: repeat(4, 250px);
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    row-gap: 3em;
    
    ${maxQuery('xl')} { 
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 3em;
    }
    ${maxQuery('lg')} { 
        grid-template-columns: 1fr 1fr;
        column-gap: 3em;
    }
    ${maxQuery('md')} { 
        grid-template-columns: 1fr;
    }
    div.grid--item {
          ${maxQuery('md')} { 
              max-width: 500px;
              width: 100%;
              margin: auto;
    }
        h3 {
                color: rgba(255, 255, 255, 0.85);
                font-weight: 500;
                font-size: 1.1rem;
            }
            div.locations {
                margin-top: 1.5em;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                display: flex;
                flex-direction: column;
                padding: 1em;
                align-items: center;
                p:not(:last-child) {
                    margin-bottom: 1em;
                }
            }
    }
}
`
