import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        background: transparent;
        border: 0;
        font-family: Arial, sans-serif;
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
    }

    body {
        line-height: 1;
        background-color: #1d1e1e;
        color: white;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const H1 = styled.h1`
    font-size: 3rem;
    margin-top: 1rem;
    text-align: center;


`;

export default GlobalStyle;
