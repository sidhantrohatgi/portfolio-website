"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
}

export default function TypingAnimation({
  phrases,
  typingSpeed = 75,
  deletingSpeed = 50,
  delayBetweenPhrases = 1000,
}: TypingAnimationProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex]

      if (isDeleting) {
        // Deleting text
        setCurrentText(currentPhrase.substring(0, currentText.length - 1))

        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
          timeout = setTimeout(handleTyping, delayBetweenPhrases)
          return
        }

        timeout = setTimeout(handleTyping, deletingSpeed)
      } else {
        // Typing text
        setCurrentText(currentPhrase.substring(0, currentText.length + 1))

        if (currentText.length === currentPhrase.length) {
          timeout = setTimeout(() => {
            setIsDeleting(true)
            handleTyping()
          }, delayBetweenPhrases)
          return
        }

        timeout = setTimeout(handleTyping, typingSpeed)
      }
    }

    timeout = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

