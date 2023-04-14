import * as chroma from 'chroma-js';

import {ColorSchemeCategories} from '../../../../types/color-scheme-categories.type';
import {ColorSchemeColor} from '../../../../types/color-scheme-color.type';

export const getColorSchemeCategories = () => {
	let isLimitsNotified = false;

	const colorSchemeCategories: ColorSchemeCategories = {};

	for (const paintStyle of figma.getLocalPaintStyles()) {
		const paint = paintStyle.paints[0];

		if (paint.type !== 'SOLID') {
			if (!isLimitsNotified) {
				figma.notify('Only solid colors are supported for now.', {
					timeout: 5000,
					error: true,
				});

				isLimitsNotified = true;
			}
			continue;
		}

		const nameParts = paintStyle.name.split('/');

		let categoryName: string;
		let colorName: string;

		categoryName = nameParts[0] || 'Uncategorized';
		colorName = nameParts[nameParts.length - 1];

		if (!colorSchemeCategories[categoryName])
			colorSchemeCategories[categoryName] = {
				name: categoryName,
				colors: [],
			};

		const chromaColor = chroma(
			Math.floor(paint.color.r * 255),
			Math.floor(paint.color.g * 255),
			Math.floor(paint.color.b * 255)
		);

		const color: ColorSchemeColor = {
			name: colorName,
			color: {
				r: Math.floor(paint.color.r * 255),
				g: Math.floor(paint.color.g * 255),
				b: Math.floor(paint.color.b * 255),
			},
			colorHex: chromaColor.hex(),
			paintStyle,
		};

		colorSchemeCategories[categoryName].colors.push(color);
	}

	return colorSchemeCategories;
};
