import styled from 'styled-components'

export const Container = styled.div`
  > div {
    width: 17.2rem;
    height: 17.2rem;
    background-color: #ffffff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.8rem 1.2rem;

    .img-skeleton {
      width: 14.2rem;
      height: 10.8rem;
      margin-top: 1rem;
    }

    .row-skeleton {
      height: 1.2rem;
      width: 80%;
    }
  }
`
