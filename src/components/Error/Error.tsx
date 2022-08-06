import React from "react"

interface ErrorMessageProps {
	error: string

}

export function Errors({ error }: ErrorMessageProps) {
	return (<p className="text-center font-bold text-red-600" > {error} </p>)
}