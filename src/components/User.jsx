export default function User({ userData }) {
  return (
    <span>
      <span className="name">{userData.name}</span>
      <span className="handle">{userData.handle}</span>
    </span>
  )
}
