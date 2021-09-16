import Styled from 'styled-components'
import { rem } from 'polished'
import { minQuery, maxQuery } from '../../../../helpers'

export default Styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    select {
        background: #272B4A;
        border: 1px solid rgba(62, 63, 69, 0.1);
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.7);
        padding: 0.5em 1em;
    }
    div.first--row {
        ${minQuery('lg')} {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 4em;
        }
        div.account--container {
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h2 {
                    font-weight: 400;
                    font-size: 1.3rem;
                    color: rgba(255, 255, 255, 0.9)
                }
            }
            div.pallet--container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: repeat(1fr, 3);
                gap: 3em;
                margin-top: 2em;
                ${maxQuery('md')} {
                    gap: 1.5em;
                }
            }
        }
        div.activity--container {
            background: #272B4A;
            border: 0.7px solid #313446;
            border-radius: 8px;
            padding: 2.5em;
            padding-top: 1.5em;
            margin-top: 4.5em;
            ${maxQuery('md')} {
                margin-top: 1.5em;
                
            }
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 5rem;
                padding-bottom: 2em;
                h3 {
                    color: #FFFFFF;
                }
                button {
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 400;    
                    padding: 0px;   
                    font-size: 1rem;
                    margin: 0px;       
                }
            }
            div.content--container {
                height: calc(100% - 5rem);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                ${maxQuery('lg')} {
                    height: 25rem;
                }
                div.activity--item {
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.7);
                    justify-content: space-between;
                    div {
                        display: flex;
                        align-items: center;
                        svg {
                            margin-left: 0.5em;
                            margin-right: 1.8em;
                            transform: scale(2.2);
                        }
                    }
                }

            }
        }
    }
    div.second--row {
        margin-top: 3em;
        display: grid;
        grid-template-columns: auto ${rem('469.78ppx')};
        column-gap: 3em;
        ${maxQuery('md')} {
            grid-template-columns: 1fr;
            row-gap: 1.5em;
            margin-top: 1.5em;
        }
    }
`
