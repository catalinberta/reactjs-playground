import styled from 'styled-components';
import LogoWhiteImage from '@src/static/assets/images/logo-white.png';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.primary.main};
	color: #fff;
`;

export const Container = styled.div(
	({ theme }) => `
  	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${theme.responsive(theme.breakpoints.uhd)} {
		max-width: 2000px;
	}
`
);

export const Logo = styled.div`
	width: 50px;
	height: 50px;
	background-size: contain;
	background-image: url(${LogoWhiteImage});
	background-repeat: no-repeat;
`;
