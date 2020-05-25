
export const fetchSomeThing = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = {
        data: [],
        error: 'ok'
      }
      resolve(res)
    }, 2000)
  })
}

export async function fetchList() {
  return []
}

export const myAdd: (x:number, y:number) => number =
function(x: number, y: number): number { return x + y; };