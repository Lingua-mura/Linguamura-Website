"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Star, Plus, Minus, Check, MessageSquare, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useParams, useRouter } from "next/navigation"
import { products } from "../../data"
import { ProductFullData } from "@/app/types/health"
import ProductSearch from "../../_components/product-search"
import Link from "next/link"


export default function ProductDetailPage() {
	const [product, setProduct] = useState<ProductFullData | null>(null)
	const [quantity, setQuantity] = useState(1)
	const [selectedSize, setSelectedSize] = useState("EU 39")
	const { id } = useParams();
const router = useRouter()
	useEffect(() => {
		setProduct(products[Number(id)])
	}, [id])

const toCart = () =>{
	router.push("/cart")
}
	if (!product) return <div> Product does not exist or has been deleted </div>
	return (
		<div>
			<ProductSearch
				name="Health Marketplace"
				tagline="Discover a wide range of health and wellness products tailored for your needs."
				searchRoute="/user/health/search"
			/>
			<div className=" mx-auto px-4 py-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
					{/* Product Image - Takes 4 columns on desktop */}
					<div className="bg-gray-50 p-6 rounded-lg lg:col-span-8">

						{/* Product Info - Takes 4 columns on desktop */}
						<div className="space-y-4 lg:flex-row flex flex-col items-center justify-center gap-4 sm:col-span-12 lg:col-span-8">
							<div className="col-span-1 w-full">
								<Image
									src="/health/image.png"
									alt="Natural Vitality CALM Gummies"
									width={300}
									height={100}
									className="mx-auto object-contain max-h-80" />
							</div>

							<div className="mt-8 space-y-1 w-full">
								<h1 className="text-xl font-medium text-gray-800 mb-2">
									{product.name}
								</h1>

								<p className="text-sm text-gray-600 mb-2">
									Brand: {product.brand} | <span className="text-teal-500">See similar products from Nike</span>
								</p>

								<div className="border-t border-gray-200 pt-4 mt-4"></div>

								<div className="flex items-baseline gap-4 mb-2">
									<span className="text-3xl font-bold">N{product.price}</span>
									<span className="text-gray-500 line-through">N{product.originalPrice}</span>
									{/* <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">-13.33%</span> */}
								</div>

								<p className="text-green-600 text-sm">{product.stockStatus}</p>
								<p className="text-sm text-gray-600">Shipping to Owerri included - N{product.shippingCost}</p>


								<div className="flex items-center gap-2 mb-2">
									<button
										className="bg-teal-500 text-white p-1 rounded"
										onClick={() => setQuantity(Math.max(1, quantity - 1))}
									>
										<Minus size={16} />
									</button>
									<span className="px-4 py-1">{quantity}</span>
									<button className="bg-teal-500 text-white p-1 rounded" onClick={() => setQuantity(quantity + 1)}>
										<Plus size={16} />
									</button>
								</div>

								{/* <div className="flex items-center gap-1 mb-2">
								{[...Array(4.8)].map((_, i) => (
									<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
								))}
								<span className="ml-2 text-gray-700">{product.verifiedRatings} verified ratings</span>
							</div> */}

								<div className="space-y-2 mb-2">
									<h3 className="font-medium">Variations</h3>
									<div className="flex flex-wrap gap-2">
										{product.sizes.map((size) => (
											<button
												key={size}
												className={`border rounded-md px-4 py-2 text-sm ${selectedSize === size
													? "border-teal-500 bg-teal-50 text-teal-500"
													: "border-gray-300 text-gray-700"
													}`}
												onClick={() => setSelectedSize(size)}
											>
												{size}
											</button>
										))}
									</div>
								</div>

								<Button onClick={toCart} className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full py-6 mt-4">
									Add to cart
								</Button>
							</div>
						</div>


						<div className="space-y-4 lg:col-span-8">
							{/* Product Details - Moved inside product info column */}
							<div className="pt-4">
								<h2 className="text-xl font-bold mb-4">Product Details</h2>
								<p className="text-gray-700 leading-relaxed">
									{product.description}
								</p>
							</div>
						</div>
					</div>

					{/* Right Panel: Delivery & Returns + Seller Info - Takes 4 columns on desktop */}
					<div className="space-y-8 lg:col-span-4">
						{/* Delivery & Returns */}
						<div className="space-y-6">
							<h2 className="text-xl font-medium">Delivery & returns</h2>

							<div className="space-y-4">
								<div className="relative">
									<select className="w-full appearance-none bg-gray-100 rounded-lg p-3 pr-10 text-gray-700">
										<option>Imo</option>
									</select>
									<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
								</div>

								<div className="relative">
									<select className="w-full appearance-none bg-gray-100 rounded-lg p-3 pr-10 text-gray-700">
										<option>Owerri- Wetheral</option>
									</select>
									<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
								</div>

								<div className="rounded-lg p-4 space-y-4">
									<div className="flex gap-3">
										<div className="text-teal-500 mt-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeMiterlimit="10"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeMiterlimit="10"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeMiterlimit="10"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeMiterlimit="10"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-medium">Pickup station</h3>
											<p className="text-sm text-gray-600">Delivery fee N900</p>
											<p className="text-sm text-gray-600">
												Order within the next <span className="font-medium">17 hours and 6 minutes</span> to have your
												item arrive at the pickup station between{" "}
												<span className="font-medium">23 August and 27 August</span>
											</p>
										</div>
									</div>

									<div className="flex gap-3">
										<div className="text-teal-500 mt-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-medium">Return Policy</h3>
											<p className="text-sm text-gray-600">Enjoy free returns within 7 days on all eligible items</p>
										</div>
									</div>

									<div className="flex gap-3">
										<div className="text-teal-500 mt-1">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M7.75 12L10.58 14.83L16.25 9.17"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-medium">Warranty</h3>
											<p className="text-sm text-gray-600">{product.delivery.warranty}</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Seller Information - Now under Delivery & Returns */}
						<div>
							<div className="flex justify-between items-center">
								<h2 className="text-xl font-bold">Seller information</h2>
								<span className="text-teal-500 text-sm">View merchant store</span>
							</div>
							<p className="text-gray-700 mt-2">Dragon-SEAS-COD</p>
							<p className="text-gray-700">94%Seller Score</p>
							<p className="text-gray-700">91% delivery rate</p>

							<h2 className="text-xl font-bold mt-6">Seller performance</h2>
							<div className="space-y-2 mt-2">
								<div className="flex items-center gap-2">
									<Check className="text-teal-500" size={18} />
									<span className="text-gray-700">
										Order Fulfillment Rate: <span className="font-medium">Excellent</span>
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Check className="text-teal-500" size={18} />
									<span className="text-gray-700">
										Quality Score: <span className="font-medium">Excellent</span>
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Check className="text-teal-500" size={18} />
									<span className="text-gray-700">
										Customer Rating: <span className="font-medium">Good</span>
									</span>
								</div>
							</div>
						</div>

						{/* Questions about product */}
						<div>
							<h2 className="text-xl font-bold mb-4">Questions about this product?</h2>
							<Button className="w-full border-2 border-teal-500 text-teal-500 bg-white hover:bg-teal-50 rounded-full py-6 flex items-center justify-center gap-2 shadow-[0_4px_0px_0px_rgba(0,128,128,1)]">
								<MessageSquare size={20} />
								Chat with us
							</Button>
						</div>
					</div>
				</div>

				{/* Customer Feedback */}
				<div className="mt-12">
					<div className="flex justify-between items-center">
						<h2 className="text-2xl font-bold">Verified Customer Feedback</h2>
						<Link href="#" className="text-teal-500 underline-offset-4">See all</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
						<div>
							<h3 className="text-lg font-medium">Verified ratings ({product.verifiedRatings})</h3>
							<div className="bg-yellow-50 p-4 rounded-lg mt-4 text-center">
								<div className="text-4xl font-bold">{product.rating}/5</div>
								<div className="flex justify-center my-2">
									{[...Array(Math.floor(product.rating))].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
									))}
									{product.rating % 1 !== 0 && (
										<Star className="h-5 w-5 fill-yellow-400 text-yellow-400 opacity-50" />
									)}
								</div>
								<div className="text-sm text-gray-600">{product.verifiedRatings} verified ratings</div>
							</div>

							<div className="space-y-2 mt-4">
								{Object.entries(product.ratingBreakdown)
									.sort(([keyA], [keyB]) => Number(keyB) - Number(keyA)) // Reverse the order
									.map(([key, value]) => (
										<div key={key} className="flex items-center justify-start gap-1">
											<span className="w-4">{key}</span>
											<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
											<span className="w-12 text-left text-sm">({value})</span>
											<div className="w-full bg-gray-200 rounded-full h-2.5 ml-2 overflow-hidden">
												<div
													className="bg-yellow-400 h-2.5 rounded-full"
													style={{ width: `${(value / product.verifiedRatings) * 100}%` }}
												></div>
											</div>
										</div>
									))}
							</div>
						</div>

						<div className="md:col-span-2">
							<h3 className="text-lg font-medium">Comments from verified purchases ({product.customerFeedback.length})</h3>

							<div className="space-y-6 mt-4">
								{product.customerFeedback.map((feedback, index) => (
									<div key={index} className="border-b">
										<div className="flex">
											{[...Array(feedback.rating)].map((_, i) => (
												<Star key={i} className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
											))}
										</div>
										<p className="font-medium mt-2">{feedback.comment}</p>
										<p className="text-gray-600 text-sm mt-1">
											{feedback.date} by {feedback.customer}
										</p>
										{/* {feedback.verifiedPurchase && (
										<div className="flex items-center gap-2 mt-2">
											<Check className="text-green-500" size={18} />
											<span className="text-green-600">Verified purchase</span>
										</div>
									)} */}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

