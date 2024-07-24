export function useTaskId() {
    let rand = Math.floor(Math.random() * 1000)
    let date = new Date().getTime()
    return date + rand
}