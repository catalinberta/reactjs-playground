import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
	text-align: center;
`;

export const useStyles = makeStyles((theme) => ({
	gridContainer: {
		width: '100%',
		marginTop: '4rem',
	},
	gridColumn: {
		flex: 1,
		width: '40rem',
	},
	paper: {
		padding: theme.spacing(4),
	},
	footNote: {
		marginTop: theme.spacing(2),
		color: '#999',
	},
}));
