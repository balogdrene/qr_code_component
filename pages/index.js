import { useState } from "react"
import { motion } from "framer-motion"
import Card from "../components/Card"

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)
  function cardFlipHandler() {
    setIsFlipped((prevState) => !prevState)
  }

  if (!isFlipped) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Card onClick={cardFlipHandler}>
          <img
            className="fluid-image rounded-corners"
            src="image-qr-code.png"
            alt="image"
          />
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </Card>
      </motion.div>
    )
  }

  if (isFlipped) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Card onClick={cardFlipHandler}>
          <p>Challenge by Frontend Mentor. Coded by Rene Balog-Dutombe.</p>
        </Card>
      </motion.div>
    )
  }
}
