import { useField, FieldHookConfig } from 'formik';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';

interface ComponentProps {
	label?: string;
	type?: string;
	marginRight?: string;
	width?: string;
	defaultValue?: any;
	icon?: string;
}

const Input: FC<ComponentProps & FieldHookConfig<string> & any> = (props): ReactElement => {
	const [field] = useField(props);
	return (
		<InputWrapper aria-label='form input container'>
			<Label htmlFor={props.id || props.name}>{props.label}</Label>
			{
				<StyledInput {...props} {...field} type={props.type} placeholder={props.placeholder} />
			}
		</InputWrapper>
	);
};

export default Input;

const StyledInput = styled.input<ComponentProps>`
	flex: 1 1 100%;
	padding: 1.8rem 1.6rem;
	font-size: 1.5rem;
	height: 3.6rem;
	background: #fdfdfd;
	border: 0.1rem solid #e1e2e5;
    border-radius: 1rem;
	box-shadow: 0 0.7rem 0.9rem -3rem rgba(70, 70, 70, 0.06);
	color: black;
	transition: all 0.5s ease-out;
	transform-origin: top left;

	&:focus {
	    outline: none;
		border: 0.1rem solid #ab90e7;
        background: #f6f4ff;
	}

	&:disabled {
		background-color: #dadada;
	}

	@media screen and (max-width: 391px) {
        font-size: 1rem;
    }

	@media screen and (max-width: 431px) {
       font-size: 1.2rem
    }
`;

const InputWrapper = styled.div<ComponentProps>`
	display: flex;
	flex-direction: column;
	max-width: ${({ width }) => (width ? width : '100%')};
	width: 100%;
	border-radius: 0.4rem;
	position: relative;
`;

export const Label = styled.label`
	color: #515a74;
	padding-bottom: 0.1rem;
	flex: 1 1 100%;
	font-style: normal;
	font-weight: bold;
	font-size: 1.4rem;
	letter-spacing: -0.1rem;
	word-spacing: 0.1rem;
`;

