import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: auto;
`;

export const Container = styled.div(
	({ theme }) => `
	max-width: 1200px;
	width: 100%;
	height: 100%;
	overflow: auto;

	${theme.responsive(theme.breakpoints.uhd)} {
		max-width: 2000px;
	}
  `
);
