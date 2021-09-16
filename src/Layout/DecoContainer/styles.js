import Styled from 'styled-components'
import Div100vh from 'react-div-100vh'
import { maxQuery, minQuery } from '../../helpers'

export default Styled(Div100vh)`
  position: fixed;
  width: 100vw;
  overflow-y: auto;
${minQuery('md')} {
  display: flex;
  ${({ theme }) => theme.mixins.scrollbar};
  align-items: center;
  padding-top: 4em;
  flex-direction: column;
  top: 0px;
  left: 0px;
}
${maxQuery('>md')} {
  padding-top: 2em;
  overflow-y: auto;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
  img.floating--img {
    ${maxQuery('xxl2')} {
      display: none
    }
  }
  img.img--left__top {
      top: 15%;
      position: fixed;
      left: 15%;
  }
    img.img--left__middle {
      top: 50%;
      position: fixed;
      left: 23%;
      transform: translateY(-50%);
  }
    img.img--left__bottom {
      bottom: 15%;
      position: fixed;
      left: 15%;
  }
  div.img--container {
    ${maxQuery('md')} {
      width: calc(100% - 2.5em);
      img {
        width: 45%;
      }
    }
      text-align: center;
      user-select: none;
  }
  div.content--container {
    background: #1A1D31;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1em;
    padding-top: 1.5em;
    padding-bottom: 2.5em;
    width: 90%;
    margin-top: 2em;
    margin-bottom: 2em;
    max-width: 550px;
    
    header {
        display: flex;
        margin-bottom: 2.5em;
        margin-top: 0.5em;
        flex-direction: column;
        align-items: center;
        div.ellipse--container {
            position: relative;
            margin-bottom: 0.5em;
            img {
                position: absolute;
                left: -2em;
                top: -0.35em;
            }
            h2 {
                font-size: 1.6rem;
                font-weight: 550;
                line-height: 160%;
                color: rgba(255, 255, 255, 0.6);
            }
        }
        p {
            color: rgba(255, 255, 255, 0.8);
        }
    }
  }
    img.img--right__top {
      top: 15%;
      position: fixed;
      right: 15%;
  }
    img.img--right__middle {
      top: 50%;
      position: fixed;
      right: 23%;
      transform: translateY(-50%);
  }
    img.img--right__bottom {
      bottom: 15%;
      position: fixed;
      right: 15%;
  }
`
