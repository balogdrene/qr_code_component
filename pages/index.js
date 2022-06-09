import Card from "../components/Card"

export default function Home() {
  return (
    <Card>
      <img
        className="fluid-image rounded-corners"
        src="image-qr-code.png"
        alt="image"
      />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </Card>
  )
}
