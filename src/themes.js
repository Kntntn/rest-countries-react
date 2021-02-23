import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  shadow: "rgba(0, 0, 0, 0.1)",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  shadow: "rgba(255, 255, 255, 0.1)",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}

    header {
        background-color: ${(props) => props.theme.body};
    }

    .card {
        background-color: ${(props) => props.theme.body};
        box-shadow: 0 .3rem 1rem 0 ${(props) => props.theme.shadow};
    }
`;
