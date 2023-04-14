import {handleMessage} from './handlers/message.handler';

(async () => {
	try {
		await figma.loadFontAsync({family: 'Ubuntu Mono', style: 'Regular'});
		await figma.loadFontAsync({family: 'Ubuntu Mono', style: 'Bold'});
	} catch (e) {
		return figma.closePlugin('Please install the Ubuntu Mono font.');
	}

	figma.showUI(__html__, {width: 400, height: 400});

	figma.ui.onmessage = handleMessage;
})();
