// export default function MainDetails({ name, address, email, phone, website }) {
//     return (
//       <section className="flex flex-col items-end justify-end">
//         <h2 className="font-bold text-xl uppercase mb-1">{name}</h2>
//         <p>{address}</p>
//         <p>{email}</p>
//         <p>{phone}</p>
//         {website && <p>{website}</p>}
//       </section>
//     );
//   }


  
  // components/MainDetails.js
  export default function MainDetails({ name, address }) {
    return (
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">From:</h2>
        <h3 className="font-bold text-xl text-gray-700 mb-1">{name}</h3>
        <p className="text-gray-600">{address}</p>
      </section>
    );
  }
  