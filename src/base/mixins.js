import { css } from 'styled-components'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  scrollbar: css`
    & {
      scrollbar-width: thin;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 80%;
      border-radius: 40px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #313446;
      border-radius: 40px;
    }
  `,
}

export default mixins
