import {generateColorFrame} from './generate-color-frame.helper';
import {ColorSchemeCategory} from '../../../../types/color-scheme-category.type';

export const generateCategoryFrame = (
	category: ColorSchemeCategory,
	position: number
) => {
	const categoryFrame = figma.createFrame();

	categoryFrame.name = category.name;
	categoryFrame.layoutMode = 'HORIZONTAL';
	categoryFrame.counterAxisSizingMode = 'AUTO';
	categoryFrame.horizontalPadding = 0;
	categoryFrame.verticalPadding = 0;
	categoryFrame.itemSpacing = 0;
	categoryFrame.y = position * 500;

	for (const color of category.colors)
		categoryFrame.appendChild(generateColorFrame(color));

	return categoryFrame;
};
