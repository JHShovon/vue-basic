const useNumber = (num) => {
    const increment = () => {
        num.value++
    }

    const decrement = () => {
        num.value--
    }

    return{
        increment,
        decrement
    }
}

export default useNumber;