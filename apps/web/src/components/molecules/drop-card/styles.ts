import styled, { css } from 'styled-components'

interface DropCardProductProps {
  background: string
}
export const DropCardProduct = styled.div<DropCardProductProps>`
  ${({ background }) => {
    return css`
      background: ${background};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      border-radius: 0px 0px 32px 32px;

      img {
        max-width: 96px;
        width: 100%;
        aspect-ratio: 0.53;
        height: auto;
        transition: all 0.2s ease-in-out;
      }
    `
  }}
  cursor: pointer;
`

export const DropCardContainer = styled.div`
  max-width: 416px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_700};
  border-radius: 16px;
  &:hover ${DropCardProduct} img {
    scale: 1.3;
  }
`

export const DropCardInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 1.5rem;
`
export const DropCardAuthor = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-right: 0.25rem;
  }
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`

interface DropCardAuthorAvatarProps {
  img: string
}
export const DropCardAuthorAvatar = styled.div<DropCardAuthorAvatarProps>`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 50%;
  width: 1.5rem;
  aspect-ratio: 1;
  height: auto;

  margin-right: 0.5rem;
`
export const DropCardProductInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DropCardProductDescription = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`
export const DropCardProductSupporters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  svg {
    color: ${({ theme }) => theme.colors.gray_500};
  }
`
