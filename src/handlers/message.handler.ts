import {handleCloseMessage} from './message-handlers/basic/close.message-handler';
import {handleNotifyMessage} from './message-handlers/basic/notify.message-handler';
import {handleErrorMessage} from './message-handlers/basic/error.message-handler';
import {handlePrintColorSchemeMessage} from './message-handlers/print-color-scheme/print-color-scheme.message-handler';
import {UserInterfaceMessageType} from '../types/enums/user-interface-message-type.enum';
import {UserInterfaceMessage} from '../types/user-interface-message/user-interface-message.type';

export const handleMessage = (message: UserInterfaceMessage) => {
	switch (message.type) {
		case UserInterfaceMessageType.CLOSE:
			return handleCloseMessage(message);
		case UserInterfaceMessageType.NOTIFY:
			return handleNotifyMessage(message);
		case UserInterfaceMessageType.ERROR:
			return handleErrorMessage(message);
		case UserInterfaceMessageType.PRINT_COLOR_SCHEME:
			return handlePrintColorSchemeMessage(message);
	}
};
