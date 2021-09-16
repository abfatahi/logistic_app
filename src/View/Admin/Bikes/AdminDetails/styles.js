import Styled from 'styled-components'
import { lighten } from 'polished'

export default Styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    header {
        background: #272B4A;
        border-radius: 5px;
        padding: 1.2em 1.5em;
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
        padding: 3em;
        div.profile--row {
            display: flex;
            justify-content: space-between;
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
                    }
                    button {
                        background: rgba(36, 26, 26, 0.15);
                        border: 0.449541px solid rgba(255, 123, 13, 0.3);
                        border-radius: 2.93179px;
                        padding: 1em;
                        font-size: 0.8rem;
                        margin-top: 1.5em;
                        top: 13em;
                        position: absolute;
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
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
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
            margin-top: 7em;
            h3 {
                font-weight: 500;
                color: #fff;
                font-size: 1.2rem;
            }
        }
    }
`
