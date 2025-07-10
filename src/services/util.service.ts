export const debounce = (func: (...args: any[]) => void, timeout = 300) => {
    let timer: number
    return (...args: any[]) => {
        clearTimeout(timer)
        timer = window.setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}