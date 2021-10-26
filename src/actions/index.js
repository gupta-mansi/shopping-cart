export const increment = () => {
    return {
        type: "INCREMENT",
        payload: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            count:   0
        }
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT",
        payload: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            count:  user.count
        }
    }
}