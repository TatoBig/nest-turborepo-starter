import Header from 'components/core/Header'
import { Button } from 'ui'

export default function Web() {
  const test = 2

  return (
    <div>
      <h1>{test}</h1>
      <Header />
      <Button />
    </div>
  )
}
