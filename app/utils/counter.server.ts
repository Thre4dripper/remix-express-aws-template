import { singleton } from './singleton.server'

const counter = singleton('db', () => ({
  _counter: 0,
  getCount() {
    return this._counter
  },
  increment() {
    this._counter++
  },
}))

export { counter }
