import Styled from 'styled-components'
import { maxQuery, minQuery } from '../../../helpers'

export default Styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    header {
        margin-bottom: 3em;
        ${maxQuery('md')} {
            margin-bottom: 1.5em;
        }
        div.top--row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 10rem;
            
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
                display: flex;
                ${maxQuery('md')} {
                    align-self: flex-end;
                    margin-top: 1.5em;
                }
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

    div.admin--content__container {
        background: #272B4A;
        height: 100%;
        border: 0.765294px solid #272B4A;
        box-sizing: border-box;
        border-radius: 8.74621px;
        display: flex;
        flex-direction: column;
        padding: 1.5em 0px;
        overflow: hidden;
        div.admin--lists--container {
            overflow-y: auto;
            ${minQuery('md')} {
                ${({ theme }) => theme.mixins.scrollbar};
            }
            flex: 1;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
           
            ${maxQuery('>lg')} {
                grid-template-columns: repeat(3, 1fr);
            }
             ${maxQuery('sm')} {
                grid-template-columns: repeat(2, 1fr);
            }
            ${minQuery('xl')} {
                padding: 0.5em 2em;
                grid-gap: 2em;
            }

        }
        div.noAdminList--container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            max-width: 80%;
            margin: 0 auto;
            justify-content: center;
            h3 {
                margin: 1.5em 0px;
                color: rgba(255, 255, 255, 0.8);
                font-weight: 400;
            }
            p.instruction {
                background: rgba(36, 26, 26, 0.15);
                border: 0.688406px solid rgba(255, 255, 255, 0.1);
                box-sizing: border-box;
                border-radius: 3.44203px;
                padding: 1em 2em;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.4);
                span {
                    color: #fff;
                }
            }
            button {
                margin-top: 2.5em;
                display: flex;
                align-items: center;
                .icon {
                    margin-right: 0.5em;
                }
            }
        }
    }
   
`
