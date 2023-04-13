import {ColorSchemeColor} from '../types/color-scheme-color.type';

export const generateColorFrame = (color: ColorSchemeColor) => {
	const colorFrame = figma.createFrame();

	colorFrame.name = color.name;
	colorFrame.layoutMode = 'VERTICAL';
	colorFrame.counterAxisSizingMode = 'AUTO';
	colorFrame.horizontalPadding = 20;
	colorFrame.verticalPadding = 24;
	colorFrame.itemSpacing = 0;
	colorFrame.fillStyleId = color.paintStyle.id;

	const innerContainerFrame = figma.createFrame();

	innerContainerFrame.name = 'Inner Container';
	innerContainerFrame.layoutMode = 'VERTICAL';
	innerContainerFrame.counterAxisSizingMode = 'AUTO';
	innerContainerFrame.horizontalPadding = 16;
	innerContainerFrame.paddingTop = 16;
	innerContainerFrame.paddingBottom = 60;
	innerContainerFrame.itemSpacing = 4;
	innerContainerFrame.cornerRadius = 4;
	innerContainerFrame.backgrounds = [
		{type: 'SOLID', color: {r: 1, g: 1, b: 1}},
	];

	const colorRect = figma.createRectangle();

	colorRect.name = 'Color';
	colorRect.resize(200, 200);
	colorRect.cornerRadius = 4;
	colorRect.fillStyleId = color.paintStyle.id;

	innerContainerFrame.appendChild(colorRect);

	const colorNameText = figma.createText();

	colorNameText.fontName = {
		family: 'Ubuntu Mono',
		style: 'Bold',
	};
	colorNameText.name = 'Color Name';
	colorNameText.characters = color.name;
	colorNameText.fontSize = 16;
	colorNameText.textAlignHorizontal = 'LEFT';
	colorNameText.textAlignVertical = 'CENTER';
	colorNameText.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];

	innerContainerFrame.appendChild(colorNameText);

	const colorHexText = figma.createText();

	colorHexText.fontName = {
		family: 'Ubuntu Mono',
		style: 'Regular',
	};
	colorHexText.name = 'Color Hex';
	colorHexText.characters = color.colorHex;
	colorHexText.fontSize = 14;
	colorHexText.textAlignHorizontal = 'LEFT';
	colorHexText.textAlignVertical = 'CENTER';
	colorHexText.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];

	innerContainerFrame.appendChild(colorHexText);

	const colorRGBText = figma.createText();

	colorRGBText.fontName = {
		family: 'Ubuntu Mono',
		style: 'Regular',
	};
	colorRGBText.name = 'Color RGB';
	colorRGBText.characters = `rgb(${color.color.r}, ${color.color.g}, ${color.color.b})`;
	colorRGBText.fontSize = 14;
	colorRGBText.textAlignHorizontal = 'LEFT';
	colorRGBText.textAlignVertical = 'CENTER';
	colorRGBText.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];

	innerContainerFrame.appendChild(colorRGBText);

	colorFrame.appendChild(innerContainerFrame);

	return colorFrame;
};
