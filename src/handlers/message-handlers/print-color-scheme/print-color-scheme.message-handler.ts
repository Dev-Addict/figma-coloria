import {getColorSchemeCategories} from './helpers/get-color-scheme-categories.helper';
import {generateCategoryFrame} from './helpers/generate-category-frame.helper';
import {PrintColorSchemeUserInterfaceMessage} from '../../../types/user-interface-message/user-interface-message.type';

export const handlePrintColorSchemeMessage = (
	_: PrintColorSchemeUserInterfaceMessage
) => {
	const page = figma.createPage();

	page.name = 'Color Scheme';

	const colorSchemeCategories = getColorSchemeCategories();

	const nodes: SceneNode[] = [];

	for (const [i, categoryName] of Object.keys(colorSchemeCategories).map(
		(categoryName, i) => [i, categoryName] as [number, string]
	)) {
		const category = colorSchemeCategories[categoryName];

		const categoryFrame = generateCategoryFrame(category, i);

		nodes.push(categoryFrame);
		page.appendChild(categoryFrame);
	}

	figma.currentPage = page;

	figma.currentPage.selection = nodes;
	figma.viewport.scrollAndZoomIntoView(nodes);
};
