import { useState, useEffect } from 'react'

type TypewriterProps = {
  children: string
  speed?: number
}

export const Typing = ({ children, speed = 50 }: TypewriterProps) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const charItr = children[Symbol.iterator]()
    const showChar = (): NodeJS.Timeout | undefined => {
      const nextChar = charItr.next()

      if (nextChar.done) {
        return
      }
      setText((current) => {
        return current + nextChar.value
      })
      return setTimeout(showChar, speed)
    }
    const timerId = showChar()

    return () => clearTimeout(timerId)
  }, [children, speed])

  return <div>{text}</div>
}
