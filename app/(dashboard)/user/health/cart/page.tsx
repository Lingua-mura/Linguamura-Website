"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight, Trash2, Check, Plus, Minus, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import HealthProductsDeals from "../_components/HealthProductsDeals"
import ProductSearch from "../_components/product-search"
import { productData } from "../data"
import { useRouter } from "next/navigation"
import { Icon } from "@iconify/react"


type ShoppingCartProps = {
	nextCheckOutPage: () => void
	prevCheckOutPage?: () => void
}

export default function Page() {
	const [checkOutPage, setCheckOutPage] = useState(1)

	const router = useRouter()
	const nextCheckOutPage = () => {
		setCheckOutPage((prev) => prev + 1)
	}
	const prevCheckOutPage = () => {
		setCheckOutPage((prev) => prev - 1)
	}
	const handleBackClick = () => {
		if (checkOutPage > 1) {
			prevCheckOutPage()
		}
		else router.back()
	}



	return (
		<div>
			<ProductSearch
				name="Health Marketplace"
				tagline="Discover a wide range of health and wellness products tailored for your needs."
				searchRoute="health/search"
			/>
			<div className="container mb-10 md:px-4 flex flex-wrap justify-start items-center gap-4">
				<button className="text-[#4E4B66]" onClick={handleBackClick}>
					<Icon icon="bytesize:arrow-left" width={40} height={40} />
				</button>
			</div>
			{checkOutPage == 1 && <ShoppingCart nextCheckOutPage={nextCheckOutPage} />}
			{checkOutPage == 2 && <ShoppingCartCheckOut nextCheckOutPage={nextCheckOutPage} />}
			{checkOutPage == 3 && <ShoppingCartCheckOutOrderConfirmation />}
			{checkOutPage !== 2 && (<>	<HealthProductsDeals products={productData} title={"Recently Viewed"} />
				<HealthProductsDeals products={productData} title={"Product you may like"} />
				<HealthProductsDeals products={productData} title={"Recently Vieweda"} />
			</>)}
		</div>
	)
}
export function ShoppingCart({ nextCheckOutPage }: ShoppingCartProps) {

	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		setQuantity((prev) => prev + 1)
	}

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1)
		}
	}

	return (
		<div className="container mx-auto px-4 py-8 max-w-6xl">
			<h1 className="text-3xl font-semibold text-gray-700 mb-6">Cart (1)</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Cart Items - Takes up 2/3 on desktop */}
				<div className="lg:col-span-2 space-y-6">
					<Separator className="hidden sm:block" />

					<div className="bg-white rounded-lg">
						<div className="flex flex-col sm:flex-row gap-6 py-4">
							{/* Product Image */}
							<div className="w-full sm:w-48 flex items-center justify-center p-4 h-full flex-col">
								<Image
									src="/images/calm-gummies.png"
									alt="Natural Vitality CALM Gummies"
									width={120}
									height={160}
									className="object-contain  h-48"
								/>
								<div>
									<button
										className="h-12 px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-1 border-red-600 text-red-500 hover:bg-red-50 hover:text-red-600">
										<Trash2 size={18} className="mr-2" />
										Remove
									</button>
								</div>

							</div>

							{/* Product Details */}
							<div className="flex-1 flex md:flex-row flex-col md:gap-2 justify-between">
								<div className="">
									<h2 className="text-xl font-medium text-gray-800 mb-1">
										Natural Vitality, CALM Gummies, Magnesium Supplement, Raspberry-Lemon, 120 Gummies
									</h2>
									<p className="text-gray-600 mb-2">Seller: Calm Company | Size: EU 40</p>
									<div className="flex items-center text-red-600 mb-4">
										<AlertTriangle size={16} className="mr-1" />
										<span className="text-sm">5 units left</span>
									</div>
								</div>

								<div className="flex flex-col md:flex-row md:items-start items-center justify-between sm:mt-0 mt-4">

									<div className=" mt-4 sm:mt-0  flex flex-col items-end">
										<div className="flex items-center gap-2 mb-2 flex-col">
											<span className="text-3xl font-bold">N150,000</span>
											<div>
												<span className="text-gray-500 line-through text-sm">N170,000</span>
												<span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded ml-2">-13.33%</span>
											</div>
										</div>

										<div className="flex items-center">
											<button
												className="w-10 h-10 bg-gray-200 rounded-l-lg flex items-center justify-center"
												onClick={decreaseQuantity}
											>
												<Minus size={16} />
											</button>
											<div className="w-12 h-10 flex items-center justify-center border-t border-b">{quantity}</div>
											<button
												className="w-10 h-10 bg-teal-500 text-white rounded-r-lg flex items-center justify-center"
												onClick={increaseQuantity}
											>
												<Plus size={16} />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Separator />
				</div>

				{/* Cart Summary - Takes up 1/3 on desktop */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-lg p-6 sticky top-4">
						<h2 className="text-2xl font-semibold text-gray-700 mb-6">Cart summary</h2>
						<Separator className="mb-6" />

						<div className="space-y-4">
							<div className="flex justify-between">
								<span className="text-lg text-gray-700">Subtotal</span>
								<span className="text-lg font-semibold">N150,000</span>
							</div>

							<p className="text-gray-600 text-sm">Delivery fee not included yet</p>

							<div className="flex items-center gap-2 text-teal-500 mt-4">
								<input type="checkbox" id="delivery-coupon" className="border-teal-500 data-[state=checked]:bg-teal-500" />
								<label htmlFor="delivery-coupon" className="text-sm cursor-pointer">
									Use your Free Delivery Coupon
								</label>
							</div>

							<Button onClick={nextCheckOutPage} className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full py-6 mt-6">
								Checkout
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



export function ShoppingCartCheckOut({ nextCheckOutPage }: ShoppingCartProps) {

	const [useFreeDelivery, setUseFreeDelivery] = useState(false)
	return (
		<div className="container mx-auto px-4 py-8 max-w-6xl">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Left Column - Customer Info, Delivery, Payment */}
				<div className="lg:col-span-2 space-y-8">
					{/* Customer Address Section */}
					<div>
						<div className="flex justify-between items-center mb-2">
							<h2 className="text-2xl font-bold text-gray-800">Customer address</h2>
							<Button className="text-[hsl(180,65%,57%)] font-medium flex items-center">
								Change <ChevronRight size={20} />
							</Button>
						</div>
						<Separator className="mb-4" />

						<div className="space-y-2">
							<p className="text-lg font-medium">Samuel Ade</p>
							<p className="text-gray-600">
								51, MCC road, Owerri, Imo State. | Imo - Owerri-Wetheral | +234 9012345678
							</p>
						</div>
					</div>

					{/* Delivery Details Section */}
					<div>
						<div className="flex justify-between items-center mb-2">
							<h2 className="text-2xl font-bold text-gray-800">Delivery details</h2>
							<Button className="text-[hsl(180,65%,57%)] font-medium flex items-center">
								Change <ChevronRight size={20} />
							</Button>
						</div>
						<Separator className="mb-4" />

						<div className="space-y-4">
							<p className="text-lg font-medium">Pick-up Station</p>
							<p className="text-gray-600">
								Delivery between <span className="font-medium">23 August and 27 August</span>.
							</p>

							<div className="space-y-2">
								<p className="text-lg font-medium">Linguamura pickup station</p>
								<p className="text-gray-600">
									Evergreen plaza, Christiana junction, Egbu road, Owerri Imo state, Beside Shoprite | Imo -
									Owerri-Wetheral
								</p>
							</div>
						</div>
					</div>

					{/* Payment Method Section */}
					<div>
						<div className="flex justify-between items-center mb-2">
							<h2 className="text-2xl font-bold text-gray-800">Payment method</h2>
						</div>
						<Separator className="mb-4" />

						<div>
							<p className="text-lg">Muracoin</p>
						</div>
					</div>
				</div>

				{/* Right Column - Cart Summary */}
				<div className="lg:col-span-1">
					<div className="bg-white rounded-lg p-6 sticky top-4 shadow-sm">
						<h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart summary</h2>
						<Separator className="mb-6" />

						<div className="space-y-4">
							<div className="flex justify-between">
								<span className="text-lg text-gray-700">Subtotal</span>
								<span className="text-lg font-semibold">N150,000</span>
							</div>

							<p className="text-gray-600 text-sm">Delivery fee not included yet</p>

							<div className="flex items-center gap-2 text-teal-500 mt-4">
								<input type="checkbox"
									id="delivery-coupon"
									className="border-teal-500 data-[state=checked]:bg-teal-500"
									checked={useFreeDelivery}
									onChange={() => setUseFreeDelivery(!!useFreeDelivery)}
								/>
								<label htmlFor="delivery-coupon" className="text-sm cursor-pointer">
									Use your Free Delivery Coupon
								</label>
							</div>

							<Button onClick={nextCheckOutPage} className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full py-6 mt-6">
								Checkout
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Spacer - For visual balance */}
			<div className="h-32 bg-yellow-50 w-full mt-8"></div>
		</div>
	)
}

export function ShoppingCartCheckOutOrderConfirmation() {

	const router = useRouter()

	const handleCartCheckOutOrderConfirmation = () => {
		router.push("/user/health")
	}
	return (
		<div className="container mx-auto px-4 py-12 max-w-4xl">
			<div className="flex flex-col md:flex-row items-start justify-between mb-16">
				<div className="flex items-start gap-4 mb-6 md:mb-0">
					<div className="bg-green-600 rounded-full p-4 flex items-center justify-center w-16 h-16 flex-shrink-0">
						<Check className="text-white w-8 h-8" />
					</div>

					<div>
						<p className="text-gray-700 text-xl mb-2">Thank you for ordering from Linguamura.</p>
						<p className="text-gray-700 text-xl font-medium">Order code: 6522781190</p>
					</div>
				</div>
				<Button onClick={handleCartCheckOutOrderConfirmation} className="bg-[hsl(180,65%,57%)] hover:bg-teal-500 text-white rounded-full py-6 px-8 text-lg w-full md:w-auto">
					Order details
				</Button>
			</div>

			<div className="flex items-start gap-4">
				<div className="text-teal-500 flex-shrink-0 mt-1">
					<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M7 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M7 17H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>

				<div>
					<p className="text-gray-700 text-lg mb-1">
						You&quote;ll be notified via SMS, email, app inbox, and push notifications when your package is ready for pickup.
					</p>
					<p className="text-gray-700 text-lg">
						Delivery between <span className="font-medium">27 August and 29 August</span>
					</p>
				</div>
			</div>
		</div>
	)
}

