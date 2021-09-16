import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../../helpers'

export default Styled.div`
background: #272B4A;
display: flex;
align-items: center;
justify-content: space-between;
height: ${({ theme }) => theme.dashTopNavHeight};
${maxQuery('lg')} {
    height: ${({ theme }) => theme.dashTopNavHeightMobile};
}
padding: 0 2em;
${maxQuery('lg')} {
    padding-left: 1.5em;
}
${minQuery('>lg')} {
padding-right: 6em;
}
h3 {
    font-weight: 550;
}
div.welcome--detail {
    button {
        display: none;
    }
    ${maxQuery('lg')} {
        h3 {
            display: none;
        }
        button {
            display: block;
            .icon {
                color: #fff;
                font-size: 2em;
            }
        }
    }
}
div.profile--btn {
    ${maxQuery('lg')} {
        display: none;
    }
    display: flex;
    align-items: center;
    div.img--container {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 0.5em;
        border-radius: 50%;
        background: pink;
    }
    p {
        font-size: 0.9rem;
        &:first-child {
            font-weight: 800;
        }
        &:last-child {
            margin-top: 0.3em;
            color: #fff;
        }
    }
}
`
