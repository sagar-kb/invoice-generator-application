// export default function ClientDetails({ clientName, clientAddress }) {
//     return (
//       <section className="mt-10">
//         <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
//         <p>{clientAddress}</p>
//       </section>
//     );
//   }


// components/ClientDetails.js
export default function ClientDetails({ clientName, clientAddress }) {
    return (
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Bill To:</h2>
        <h3 className="font-bold text-xl text-gray-700 mb-1">{clientName}</h3>
        <p className="text-gray-600">{clientAddress}</p>
      </section>
    );
  }
  