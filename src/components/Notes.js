
  // components/Notes.js
  export default function Notes({ notes }) {
    return (
      <section className="mt-10 mb-5">
        <h3 className="font-bold text-gray-700 mb-3">Additional Notes:</h3>
        <p className="text-gray-600 bg-gray-50 p-6 rounded-lg">{notes}</p>
      </section>
    );
  }
  