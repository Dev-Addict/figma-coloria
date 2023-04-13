import {getColorSchemeCategories} from './utils/get-color-scheme-categories.util';
import {generateCategoryFrame} from './utils/generate-category-frame.util';

(async () => {
	try {
		await figma.loadFontAsync({family: 'Ubuntu Mono', style: 'Regular'});
		await figma.loadFontAsync({family: 'Ubuntu Mono', style: 'Bold'});
	} catch (e) {
		console.log(e);
	}

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
	figma.closePlugin();
})();
