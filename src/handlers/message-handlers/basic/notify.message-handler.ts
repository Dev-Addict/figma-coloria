import {NotifyUserInterfaceMessage} from '../../../types/user-interface-message/user-interface-message.type';

export const handleNotifyMessage = (
	message: NotifyUserInterfaceMessage,
) => {
	figma.notify(message.payload, {timeout: 5000});
};
