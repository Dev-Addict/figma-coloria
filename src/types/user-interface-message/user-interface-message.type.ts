import {UserInterfaceMessageType} from '../enums/user-interface-message-type.enum';
import {GeneralUserInterfaceMessage} from './general-user-interface-message.type';

export type CloseUserInterfaceMessage = GeneralUserInterfaceMessage<
	UserInterfaceMessageType.CLOSE,
	string | undefined
>;
export type NotifyUserInterfaceMessage = GeneralUserInterfaceMessage<
	UserInterfaceMessageType.NOTIFY,
	string
>;
export type ErrorUserInterfaceMessage = GeneralUserInterfaceMessage<
	UserInterfaceMessageType.ERROR,
	string
>;
export type PrintColorSchemeUserInterfaceMessage =
	GeneralUserInterfaceMessage<UserInterfaceMessageType.PRINT_COLOR_SCHEME>;

export type UserInterfaceMessage =
	| CloseUserInterfaceMessage
	| NotifyUserInterfaceMessage
	| ErrorUserInterfaceMessage
	| PrintColorSchemeUserInterfaceMessage;
