import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
	return (
		<nav className='h-[50px] flex justify-between px-5 bg-gray-500 text-white '>
			<span className="font-bold">React 2022</span>
			<span>
				<Link className='px-4' to='/'>catalog</Link>
				<Link to='/about'>about</Link>
			</span>

		</nav>
	)
} 