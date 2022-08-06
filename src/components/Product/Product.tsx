import { useState } from "react"
import { IProduct } from "../../models"

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	const [isShowDescription, setIsShowDescription] = useState(false)

	const btnBgClassName = isShowDescription ? 'bg-blue-200' : 'bg-yellow-200'
	const btnClasses = ['py-2 px-4 rounded', btnBgClassName]

	return (
		<div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
			<img
				className="w-1/6"
				src={product.image}
				alt={product.title}
			/>
			<p>{product.title}</p>
			<p className="font-bold"> {product.price} </p>
			<button
				className={btnClasses.join(' ')}
				onClick={() => setIsShowDescription(prev => !prev)}
			>
				{isShowDescription ? "Hide details" : "Show details"}
			</button>
			{isShowDescription && <div>
				<p>{product.description}</p>
				<p>Rate: <span style={{ fontWeight: 900 }}> {product?.rating?.rate} </span> </p>
			</div>}
		</div>
	)
}