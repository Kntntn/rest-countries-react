import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  elements: "hsl(209, 23%, 22%)",
  filterHover: "rgb(60, 79, 95)",
  fontColor: "#fff",
  placeholder: "rgba(255, 255, 255, 0.4)",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        transition: all 0.2s linear; 
	}

    header {
        background-color: ${(props) => props.theme.elements};
    }

    .darkmode-toggle button {
        color: ${(props) => props.theme.fontColor};
    }

    #searchInput {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.fontColor};
    }

    .select, .options {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.fontColor};
    }

    .select:hover {
        background-color: ${(props) => props.theme.filterHover};
    }

    .card {
        background-color: ${(props) => props.theme.elements};
    }

    ::placeholder {
        color: ${(props) => props.theme.placeholder};
    }

    .btn-back {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.fontColor};
    }

    .border-country {
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.fontColor};
    }
`;
