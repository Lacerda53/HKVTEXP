import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        --primary: #FF699D; 
        --secondary: #2C3B66;
        --background: #2C3B66;
        --blue: #4D67B2;
        --text: #726E76;
        --gray: #DADADB;
        --box-content: #ECE9F2;
        --box-container: #FFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }

    ::selection{
        color: #fff;
        background: #1f1f1f;
    }

    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: var(--text);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        color: var(--secondary);
    }

    p{
        font-size: .9rem;
        font-weight:300;
    }
    
    a {
      text-decoration: none;
      color: var(--primary);
    }

    button{
        border: 0;
        width: 100%;
        background: var(--primary);
        color: #fff;
        font-weight: 500;
        border-radius: 1.5rem;
        height: 3rem;
        cursor: pointer;
    }
    
    [disabled],
    .disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
