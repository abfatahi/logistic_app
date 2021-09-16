import Styled from 'styled-components'
import { lighten } from 'polished'
import { minQuery, maxQuery } from '../../../../helpers'

export default Styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;
    header {
        background: #272B4A;
        border-radius: 5px;
        padding: 1.2em 1.5em;
        ${maxQuery('md')} {
            padding: 1em;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        div.row-1 {
            display: flex;
            align-items: center;
            a {
                font-size: 0.9rem;
                text-decoration: none;
                color: rgba(255, 255, 255, 0.5);
                &:not(:last-child) {
                    &:after {
                        content: ">";
                        margin: 0 0.5em;
                    }
                }
                &.active {
                    color: #fff;
                }
                &:last-child {
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }
        div.row-2 {
            display: flex;
            button {
                background: #1B203A;
                border-radius: 50%;
                padding: 0.5em;
                display: flex;
                align-items: center;
                justify-content: center;
                .icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                &:first-child {
                    margin-right: 1em;
                }
            }
        }
    }
    div.admin--details__container {
        background: #272B4A;
        border: 0.765294px solid #272B4A;
        box-sizing: border-box;
        border-radius: 8.74621px;
        flex: 1;
        padding: 1em 0px;
        overflow: hidden;
        div.content--container {
            overflow-y: auto;
            padding: 3em;
            padding-top: 2em;
            ${maxQuery('md')} {
                padding: 1em;
            }
            ${minQuery('>md')} {
                ${({ theme }) => theme.mixins.scrollbar};
            }
            height: 100%;
            flex: 1;
            div.profile--row {
                display: flex;
                justify-content: space-between;                
                ${maxQuery('md')} {
                    flex-direction: column;
                }
                div.col-1 {
                    display: flex;
                    align-items: center;
                    div.img--contents {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 4em;
                        position: relative;
                        div.img--container {
                            width: 10rem;
                            height: 10rem;
                            border-radius: 50%;
                            background: pink;
                            ${maxQuery('md')} {
                                width: 8rem;
                                height: 8rem;
                            }
                        }
                        button {
                            background: rgba(36, 26, 26, 0.15);
                            border: 0.449541px solid rgba(255, 123, 13, 0.3);
                            border-radius: 2.93179px;
                            font-size: 0.8rem;
                            padding: 1em 1.5em;
                            margin-top: 1.5em;
                            top: 13em;
                            ${maxQuery('>md')} {
                                position: absolute;
                                top: 11em;
                                font-size: 0.7rem;
                            }
                            color: rgba(255, 255, 255, 0.7);
                        }
                    }
                    div.profile--content {
                        h3 {
                            font-weight: 500;
                            color: #fff;
                            margin-bottom: 1em;
                        }
                        p {
                            font-size: 0.8rem;
                            &:not(:last-child) {
                                margin-bottom: 1em;
                            }
                            &.offline {
                                background: #E24B5D;
                                text-align: center;
                                width: fit-content;
                                padding: 0.5em 1.5em;
                                color: #FFFFFF;
                            }
                        }
                    }
                }
                div.col-2 {
                    display: flex;
                    flex-direction: column;
                    width: 13rem;
                    padding-top: 1em;
                    padding-bottom: 1.5em;
                    justify-content: space-between;
                    ${maxQuery('md')} {
                        flex-direction: row;
                        margin-top: 4em;
                        width: 100%;
                        flex-wrap: wrap;
                    }
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        ${maxQuery('md')} {
                            font-size: 0.8rem;
                            &:nth-child(2) {
                                margin: 1em 0px;
                            }
                        }
                        svg {
                            margin-right: 0.6em;
                        }
                        &.btn--deactivate {
                            background: #6ABA6D;
                            border: none;
                            &:hover {
                                background: ${lighten(0.1, '#6ABA6D')};
                            }
                        }
                        &.btn--delete {
                            color: #E24B5D;
                        }
                    }
                }
            }
            div.activities--container {
                h3 {
                    font-weight: 500;
                    color: #fff;
                    font-size: 1.2rem;
                    position: -webkit-sticky;
                    position: sticky;
                    top: -5rem;
                    padding-top: 4em;
                    ${maxQuery('md')} {
                        padding-top: 1em;
                        top: -1rem;
                    }
                    margin-bottom: 1em;
                    background: #272B4A;
                    padding-bottom: 1em;
                }
                div.activity--lists {
                    div.activity--item {
                        display: flex;
                        div.illustration--container {
                            margin-right: 1em;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            div.pallet--container {
                                margin-left: 0.1em;
                            }
                        }
                        div.activity--content {         
                            display: flex;
                            flex: 1;
                            justify-content: space-between;
                            p:first-child {
                                margin-bottom: 1.5em;
                                font-size: 1rem;
                                color: rgba(255, 255, 255, 0.7);
                            }
                            p:last-child {
                                font-size: 0.9rem;
                                color: rgba(255, 255, 255, 0.5);
                            }
                            div:last-child {
                                text-align: right;
                                p:last-child {
                                    color: ${({ theme }) => theme.primary};
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
`
