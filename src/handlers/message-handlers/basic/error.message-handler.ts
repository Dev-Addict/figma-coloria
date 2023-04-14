import {ErrorUserInterfaceMessage} from '../../../types/user-interface-message/user-interface-message.type';

export const handleErrorMessage = (message: ErrorUserInterfaceMessage) => {
	figma.notify(message.payload, {timeout: 5000, error: true});
};
