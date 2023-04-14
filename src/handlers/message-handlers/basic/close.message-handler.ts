import {CloseUserInterfaceMessage} from '../../../types/user-interface-message/user-interface-message.type';

export const handleCloseMessage = (message: CloseUserInterfaceMessage) => {
	figma.closePlugin(message.payload);
};
