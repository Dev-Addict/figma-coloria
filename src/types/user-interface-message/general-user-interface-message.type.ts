import {UserInterfaceMessageType} from '../enums/user-interface-message-type.enum';

export interface GeneralUserInterfaceMessage<
	Type extends UserInterfaceMessageType,
	Payload = undefined
> {
	type: Type;
	payload: Payload;
}
