interface User {
  name: string
  setAge(name:string, age:number):void
}

type User2 = {
  age: number
}

interface SetUser {
  (name:string, age:number):void
}

interface Name {
  name: string
}
interface User extends Name {
  age: number
}

type Name = {
  name: string
}

interface User extends Name {
  age:number
}


type User = Name & { age: number }
