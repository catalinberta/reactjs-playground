import styled from 'styled-components';
import AddNote from './components/AddNote';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
`;

export const AddNoteStyled = styled(AddNote)`
	margin-top: 4rem;
`;
