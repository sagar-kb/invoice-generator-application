export default function InvoiceDetails({ total }) {
    return (
      <section className="mt-10 mb-5">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
      </section>
    );
  }