function CustomerCard({ customer }) {
  return (
    <section>
      <h2>Customer Details</h2>
      <p>Customer ID: {customer?.id}</p>
      <p>Name: {customer?.name}</p>
      <p>Email: {customer?.email}</p>
      <p>Status: {customer?.status}</p>
    </section>
  )
}

export default CustomerCard