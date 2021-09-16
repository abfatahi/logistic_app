import Styled from 'styled-components'
import { maxQuery, minQuery } from '../../../helpers'

export default Styled.div`
width: 100vw;
position: fixed;
left: 0px;
top: 0px;
display: flex;
aside.sideNav--container {
    ${minQuery('>lg')} {
        width: ${({ theme }) => theme.dashSideNavWidth};
        flex-basis: ${({ theme }) => theme.dashSideNavWidth};
    }
    ${maxQuery('lg')} {
        display: none;
        &.show--nav__mobile {
            display: block;
        }
    }
}
div.dashboard--content {
    flex: 1;
    div.dashboard--content__container {
        overflow-y: auto;
        padding: 3em 4em;
        ${maxQuery('lg')} {
            padding: 1em 1.5em;
        }
        height: ${({ theme }) => `calc(100vh - ${theme.dashTopNavHeight})`};
        ${maxQuery('lg')} {
            height: ${({ theme }) =>
              `calc(100vh - ${theme.dashTopNavHeightMobile})`};
        }
        ${minQuery('md')} {
            ${({ theme }) => theme.mixins.scrollbar};
        }
    }
}
`
