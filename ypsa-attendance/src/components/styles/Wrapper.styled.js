import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
`

export const Title = styled.text`
font-weight: 600;
font-size: 35px;
margin-left: 10%;
font-family: 'Montserrat', sans-serif;
`
export const FormGroup = styled.div`
    display: block;
	width: 300px;
	margin: 2% 10%;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #000;
    display: block;
`;

export const Input = styled.input`
	padding: 2.1em;
	color: #000;
	background: #ececec;
	border: none;
	border-radius: 4px;
	width: 200%;
	margin-bottom: 0.5em;
`;


export const Message = styled.label`
	margin-bottom: 0.5em;
	color: blue;
    display: block;
`;