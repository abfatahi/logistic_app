import Styled from 'styled-components'

export default Styled.div`
    form {
        padding: 0 2em;
        h3.primary--text {
            margin-bottom: 1em;
            margin-top: 2em;
            font-weight: 550;
            font-size: 1.1rem;
            color: ${({ theme }) => theme.primary};
        }
        div.detail--container {
            background: rgba(36, 26, 26, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding: 1.5em 2em;
            margin-bottom: 1.3em;
            p:last-child {
                margin-top: 2em;
                color: ${({ theme }) => theme.primary};
            }
        }
        div.orderDetail__container {
            background: rgba(36, 26, 26, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 5px;
            padding: 1.5em 2em;
            margin-bottom: 1.3em;
            span {
                color: ${({ theme }) => theme.primary};
                margin-right: 0.5em;
            }
            p:not(:last-child) {
                margin-bottom: 1em;
            }
        }
        button.auth--btn {     
            margin-top: 3em;       
            border-radius: 10px 0px;
            padding-top: 1.2em;
            padding-bottom: 1.2em;
            font-weight: 550;
        }
    } 
`
