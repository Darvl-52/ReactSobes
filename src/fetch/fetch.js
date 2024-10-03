export function FetchSlice (setUser, setIsLoading) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const firstData = data.slice(0, 6)
            setUser(firstData)
        })
        .then(() => setIsLoading(false))
}

export function FetchUserOne (id, setUser, setIsLoading) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .then(() => setIsLoading(false))
}