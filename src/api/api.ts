
export const fetchSomeThing: (a:number) => Promise<{data: any[], error: string}> = () => {
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

export const test1:() => Promise<any> = async () => {
  return {
    data: []
  }
}

export const fetchList: () => Array<any> = () => {
  return []
}

export const main = new Promise<number>((resolve) => {
  resolve(1)
})

export const main1 = new Promise((resolve: (value: number) => void) => {
  resolve(20)
})


export const myAdd: (x:number, y:number) => number =
function(x: number, y: number): number { return x + y; };

