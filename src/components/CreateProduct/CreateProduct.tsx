import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { IProduct } from '../../models'
import { Errors } from '../Error/Error'

const productData: IProduct = {
	title: '',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 31,
		count: 7
	}
}

interface CreateProductProps {
	onCreate: (product: IProduct) => void
}

export function CreateProduct({ onCreate }: CreateProductProps) {
	const [value, setValue] = useState('')
	const [error, setError] = useState('')


	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault()
		// валидация продукта

		if (value.trim().length === 0) {
			setError('Введите не пустое название продукта')
			return
		}
		productData.title = value.trim()

		const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)


		onCreate(response.data)
	}

	/* async function addNewProduct() {
		try {
			// setError('')
			// setLoading(true)
			const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
			// setProducts(response.data)
			// setLoading(false)
		} catch (e: unknown) {
			const error = e as AxiosError
			// setLoading(false)
			// setError(error.message)
		}
	} */

	const changeInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					className="border py-2 px-4 mb-2 rounded w-full outline-none"
					placeholder='Enter product title...'
					value={value}
					onChange={changeInput}
				/>

				{error && <Errors error={error} />}
				<button
					type="submit"
					className='py-2 px-4 border bg-yellow-400 rounded hover:bg-yellow-600 hover:text-white'
				>
					Create
				</button>
			</form>
		</>
	)
}