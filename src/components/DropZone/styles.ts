import styled from 'styled-components';

export const Container = styled.div`
  .dropzone {
    height: 16rem;
    width: 26rem;
    max-width: 26rem;
    background: #E1FAEC;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    outline: 0;
  }

  .dropzone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dropzone p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #4ECB79;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
  }

  .dropzone p svg {
    color: #4ECB79;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  .dropzone h6 {
    color: #4ECB79;
    font-size: 1.6rem;
    padding-left: 0.8rem;
  }

  @media (max-width: 767px) { /* smartphones */
    .dropzone {
      width: 80vw;
    }
  }

`;
