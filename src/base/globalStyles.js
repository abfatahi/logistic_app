import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
    }
    body, html {
      margin: 0px;
      padding: 0px;
      overflow-x: hidden;
      font-size: 1rem;
    }
    html {
      font-family: ${({ theme }) => theme.fontFamily};
      background: ${({ theme }) => theme.bgColor}; 

    ${maxQuery('xxl3')} {
        font-size: 90%;
      }

      ${maxQuery('lg')} {
        font-size: 95%;
      } 

      ${maxQuery('md')} {
        font-size: 90%;
      }

      ${maxQuery('sm')} {
        font-size: 85%;
      }


    }

     body {
      font-weight: normal;
      color: ${({ theme }) => theme.txtColor};
      ${({ theme }) => theme.mixins.scrollbar};
      h1, h2, h3, h4, p {
        margin: 0px;
        padding: 0px;
      }
      div#root {
        margin: 0 auto;
        width: 95%;
        max-width: ${({ theme }) => theme.maxWidth};
        position: relative;
  
        ${maxQuery('md')} {
        width: 90%;
        }
      ${maxQuery('sm')} {
        width: 85%;
        }
      } 
      div.app--container {
        padding-top: ${({ theme }) => theme.navHeight};
          ${maxQuery('md')} {
            padding-top: ${({ theme }) => theme.smNavHeight};
        }
      } 

    /* utilities */
      .u--color__primary {
        color: ${({ theme }) => theme.primary};
      }
     }
`
