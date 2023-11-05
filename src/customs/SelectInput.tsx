import { useField, FieldHookConfig } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Dropdown } from '../svg/dropdown.svg'

interface ComponentProps {
	width?: string;
	label?: string;
	options?: HTMLSelectElement;
	placeholder?: string;
	disabled?: boolean
	onChange?: (value: string) => void
}

const Select = (props: ComponentProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);

	return (
		<Wrapper>
			<Label htmlFor={props.id || props.name}>{props.label}</Label>
			<StyledSelect {...field} onChange={props.onChange} disabled = {props.disabled}>
				{!meta.value && <option value=''>{ props.placeholder || props.label }</option>}
				{props.options}
			</StyledSelect>
			<IconWrapper><Dropdown /></IconWrapper>
		</Wrapper>
	);
};

export default Select;

const Wrapper = styled('div')<ComponentProps>`
	display: flex;
	flex-direction: column;
	max-width: ${({ width }) => (width ? width : '100%')};
	width: 100%;
	border-radius: 0.4rem;
	position: relative;
`;

const Label = styled('label')`
	padding-bottom: 0.6rem;
	flex: 1 1 100%;
	color: #515a74;
	font-style: normal;
	font-weight: bold;
	font-size: 1.4rem;
	letter-spacing: -0.1rem;
	word-spacing: 0.1rem;
`;

const StyledSelect = styled('select')<any>`
	flex: 1 1 100%;
	appearance: none;
	padding: 1.6rem 1.8rem;
	font-size: 1.5rem;
	height: 6rem;
	box-shadow: 0 0.7rem 0.9rem -3rem rgba(70, 70, 70, 0.06);
	color: var(--color-black-default);
	transition: all 0.5s ease-out;
	transform-origin: top left;
	border: 0.1rem solid #e1e2e5;
	border-radius: 1rem;
	position: relative;

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

const IconWrapper = styled.div`
	position: absolute;
	right: 2rem;
	top: 4.4rem;
`

