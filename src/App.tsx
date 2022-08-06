import { useContext } from 'react';
import { CreateProduct } from './components/CreateProduct/CreateProduct';
import { Errors } from './components/Error/Error';
import { Loader } from './components/Loader/Loader';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { Product } from './components/Product/Product';
import { ModalContext } from './context/ModalContext';
import { useProtucts } from './hooks/products';
import { IProduct } from './models';

function App() {

	const { modal, open, close, } = useContext(ModalContext)
	const { products, error, loading, addProduct } = useProtucts()
	//const [modal, setModal] = useState(false)

	const createHendler = (product: IProduct) => {
		close()
		addProduct(product)

	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <Errors error={error} />}
			{products.map(product => <Product product={product} key={product.id} />)}

			{modal && <ModalWindow title='Add new product' onClose={close}>
				<CreateProduct onCreate={createHendler} />
			</ModalWindow>}

			<button
				className='fixed rounded-full bottom-5 right-5 bg-red-700 text-white text-2xl px-4 py-2'
				onClick={open}
			>
				+
			</button>
		</div >
	)
}

export default App;
