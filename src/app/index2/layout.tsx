import './globals-v2.css'

export default function Index2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans">
      {children}
    </div>
  )
}