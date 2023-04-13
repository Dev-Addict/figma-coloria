import {RGB} from './rgb.type';

export interface ColorSchemeColor {
	name: string;
	color: RGB;
	colorHex: string;
	paintStyle: PaintStyle;
}
