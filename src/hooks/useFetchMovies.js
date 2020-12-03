import { useState, useEffect } from 'react';

const API_ROOT_URL = "http://localhost:2020";

const useFetchMovies = () => {
		const [data, setData] = useState({})
		const [loading, setLoading] = useState(false)
		const [error, setError] = useState(false)
		const endpoint = `${API_ROOT_URL}/movies`

		useEffect(() => {
			setLoading(true)
			fetch(endpoint)
				.then(res => res.json())
				.then((res) => {
					setData(res)
					setLoading(false)
				})
				.catch(() => {
					setError(true)
					setLoading(false)
				})
		}, [endpoint])

		return { data, loading, error }
}

export default useFetchMovies
