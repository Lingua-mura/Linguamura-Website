import Image from "next/image"
import { Icon } from '@iconify/react';

export default function ProductCard() {
	return (
		<div className="max-w-xs rounded-3xl bg-white p-4 shadow-lg relative">
		 <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors boder-2 border-red-700 rounded-full p-2">
							<Icon icon="mdi:Heart" className="h-6 w-6" />
      </button>
			<div className="flex flex-col items-center">
				<div className="mb-4 flex justify-center">
					<Image
						src="/placeholder.svg?height=200&width=150"
						alt="Natural Vitality CALM Gummies"
						width={150}
						height={200}
						className="object-contain"
					/>
				</div>

				<div className="w-full text-center">
					<h3 className="mb-2 text-xl font-medium text-gray-600">Natural Vitality, CALM Gummies, Magnesi...</h3>

					<div className="mb-2 flex items-center justify-center">
						{[...Array(5)].map((_, i) => (
							<Icon icon="mdi:star" key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
						))}
						<span className="ml-2 text-gray-700">265</span>
					</div>

					<div className="mt-2">
						<p className="text-2xl font-bold text-black">N150,000</p>
					</div>
				</div>
			</div>
		</div>
	)
}

