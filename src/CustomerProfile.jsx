function CustomerProfile({ profile }) {
  return (
    <section>
      <h2>Customer Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Role: {profile.role}</p>
      <p>Location: {profile.location}</p>
    </section>
  )
}

export default CustomerProfile