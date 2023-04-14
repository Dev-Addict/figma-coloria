import {forwardRef, SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const Logo = forwardRef<SVGSVGElement, Props>((props, ref) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={300}
			height={300}
			fill="none"
			viewBox="0 0 300 300"
			ref={ref}
			{...props}>
			<path
				fill="#2D3142"
				fillRule="evenodd"
				d="M150 300c82.843 0 150-67.157 150-150S232.843 0 150 0 0 67.157 0 150s67.157 150 150 150Zm0-30c66.274 0 120-53.726 120-120S216.274 30 150 30 30 83.726 30 150s53.726 120 120 120Z"
				clipRule="evenodd"
			/>
			<path
				fill="#FFFBFE"
				fillRule="evenodd"
				d="M256.066 43.934 150 0 43.934 43.934 0 150l43.934 106.066L150 300l106.066-43.934L300 150 256.066 43.934ZM150 270c66.274 0 120-53.726 120-120S216.274 30 150 30 30 83.726 30 150s53.726 120 120 120Z"
				clipRule="evenodd"
			/>
			<path
				fill="#3C91E6"
				fillRule="evenodd"
				d="M279.904 75 150 0 20.096 75v150L150 300l129.904-75V75ZM150 270c66.274 0 120-53.726 120-120S216.274 30 150 30 30 83.726 30 150s53.726 120 120 120Z"
				clipRule="evenodd"
			/>
			<path
				fill="url(#a)"
				d="M217.882 82.118c1.562-1.562 1.568-4.102-.056-5.6A100.001 100.001 0 0 0 50 150a100 100 0 0 0 167.826 73.482c1.624-1.498 1.618-4.038.056-5.6l-65.054-65.054a4 4 0 0 1 0-5.656l65.054-65.054Z"
			/>
			<defs>
				<radialGradient
					id="a"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(100 0 0 100 150 150)"
					gradientUnits="userSpaceOnUse">
					<stop stopColor="#3C91E6" />
					<stop offset={0.328} stopColor="#3C91E6" />
					<stop offset={1} stopColor="#DC6ACF" />
				</radialGradient>
			</defs>
		</svg>
	);
});
