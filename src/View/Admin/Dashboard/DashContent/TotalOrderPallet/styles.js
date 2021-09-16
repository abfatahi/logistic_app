import Styled from 'styled-components'

export default Styled.div`
    background: #272B4A;
    border: 0.765294px solid #272B4A;
    border-radius: 8.74621px;
    padding: 1.5em;
    height: 25rem;
    display: flex;
    flex-direction: column;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1em;
        h3 {
            color: #fff;
            font-weight: 500;
        }
        select {
                background: #272B4A;
                border: 0.968627px solid rgba(255, 255, 255, 0.2);
                box-sizing: border-box;
                border-radius: 3.87451px;
            }
        }
    }
    div.order--container {
        flex: 1;
    }
   
`
