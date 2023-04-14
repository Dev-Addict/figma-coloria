import styled from 'styled-components';

import {Logo} from './assets/logo.asset';
import {UserInterfaceMessageType} from '../types/enums/user-interface-message-type.enum';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 16px;
	width: 100%;
	height: 100%;
	background-color: #fffbfe;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 8px;

	& svg {
		width: 32px;
		height: 32px;
	}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 600;
	color: #2d3142;
`;

const Main = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	padding: 16px 24px;
	border: none;
	border-radius: 8px;
	background-color: #3c91e6;
	color: #fffbfe;
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
	width: 200px;
`;

export const App = () => {
	const onPrintColorSchemeClick = () => () =>
		parent.postMessage(
			{pluginMessage: {type: UserInterfaceMessageType.PRINT_COLOR_SCHEME}},
			'*'
		);

	return (
		<Container>
			<HeaderContainer>
				<Logo />
				<Title>Coloria</Title>
			</HeaderContainer>
			<Main>
				<Button onClick={onPrintColorSchemeClick()}>Print Color Scheme</Button>
			</Main>
		</Container>
	);
};
