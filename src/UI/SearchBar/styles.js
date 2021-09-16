import Styled from 'styled-components'

export default Styled.div`
    width: 100%;
    form {
        display: flex;
        position: relative;
        height: 2.8rem;
        .icon {
            position: absolute;
            font-size: 1.2rem;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 1em;
        }
        div.input--group {
            margin: 0px;
            align-items: center;
            input {
                background: #272B4A;
                border-color: #272B4A;
                padding-left: 3.5em;
                height: 100%;
                border-radius: 8px 0px 0px 8px;
            }
        }
        button {
            padding: 0px 1.5em;
            border-radius: 0px 5px 5px 0px;
        }
    }
`
