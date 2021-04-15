import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  .page-header {
    width: 100vw;
    background: #b0b0ef;
    height: 10rem;
  }

  .top-bar-container {
    background: #7777FF;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .top-bar-container a {
    padding: 0.8rem 2rem;
  }

  .header-content {
    margin-top: 2rem;
  }

  #page-graphs-tools {
    background: var(--color-content-background);
    padding: 2rem 2rem;
  }

  #page-graphs-tools .upload form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  #page-graphs-tools .upload form button {
    height: 4rem;
    width: 10rem;
    margin: 1.6rem;

    border: none;
    border-radius: 0.8rem;
    background: var(--color-primary);

    transition: background-color 0.2s;
  }

  #page-graphs-tools .upload form button:hover {
    background: var(--color-primary-dark);
  }



  #page-graphs-tools .result {
    margin: 2rem
  }

  #page-graphs-tools .result h1 {
    margin: 1rem;
  }

  #page-graphs-tools .plot h2 {
    margin: 1rem;
  }

  #page-graphs-tools .page-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 8rem;
  }

  footer {
    width: 100%;
    background: #b0b0ef;
    height: 10rem;
    padding-top: 2rem;
  }

  @media (max-width: 1023px) { /* tablets */
    #page-graphs-tools .page-content {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }
  }

  @media (max-width: 767px) { /* smartphones */
    #page-graphs-tools .page-content {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(8, 1fr);
    }
  }
`;
