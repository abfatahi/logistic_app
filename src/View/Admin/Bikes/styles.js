import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    header {
        margin-bottom: 3em;   
        ${maxQuery('md')} {
            margin-bottom: 2em;   
        }
        div.top--row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 8rem;
            h2 {
                color: #fff;
            }
        }
        div.header--row {
            display: flex;
            align-items: center;
            margin-top: 2em;
            justify-content: space-between;
            ${maxQuery('md')} {
                flex-direction: column;
                justify-content: flex-end;
            }
            div.searchBar--container {
                max-width: 40rem;
                ${maxQuery('md')} {
                    max-width: 100%;
                }
                align-items: center;
            }
            button.add--btn {
                ${maxQuery('md')} {
                    margin-top: 1.2em;
                    align-self: flex-end;
                }
                display: flex;
                align-items: center;                
                background: #272B4A;
                border: 0.5px solid rgba(255, 255, 255, 0.08);
                box-sizing: border-box;
                border-radius: 4.02614px;
                color: ${({ theme }) => theme.primary};
                .icon {
                    margin-right: 0.2em;
                }
            }
        }
    }

    div.bikes--content__container {
        background: #272B4A;
        height: 100%;
        border: 0.765294px solid #272B4A;
        box-sizing: border-box;
        border-radius: 8.74621px;
    }
   
`
