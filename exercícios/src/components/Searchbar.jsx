import React, { useState } from 'react'

function Searchbar() {

  const [inputSearch, setSearch] = useState('')
  const [arrSearch, setArrS] = useState([])
  const [arrPerson, setPerson] = useState([

    { id: 1, nome: "⚠️João", idade: 25 },
    { id: 2, nome: "🎯Maria", idade: 30 },
    { id: 3, nome: "👍José", idade: 22 },
    { id: 4, nome: "🤷‍♂️Ana", idade: 28 },
    { id: 5, nome: "🗣️Marcos", idade: 35 }

  ])

  function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  function removeEmojis(str) {
    return str.replace(/[^\x20-\x7E]/g, ""); // Remove caracteres não alfanuméricos (como emojis)
  }


  // function SearchCompare() {

  //   const compare = arrPerson.filter(person =>
  //     normalizeString(person.nome).toLowerCase().includes(normalizeString(inputSearch).toLowerCase())
  //   );
  //   setArrS(compare)

  //   if (arrSearch.length == 0) {
  //     setArrS(arrPerson)
  //   }

  // }

  function SearchCompare() {
  const query = normalizeString(inputSearch).toLowerCase();

  if (!query) {
    setArrS(arrPerson); // Se o input estiver vazio, mostra todos
    return;
  }

  const compare = arrPerson.filter(person =>
    normalizeString(person.nome).toLowerCase().includes(query)
  );

  setArrS(compare); // Pode ser vazio, o "Not Found" lida com isso
}

  return (
    <div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <h1>Searchbar</h1>

        <input type="text" onChange={(e) => { setSearch(e.target.value); SearchCompare() }} />
        {/* <button onClick={SearchCompare}>Pesquisar</button> */}

      </div>

      {arrSearch.map(person => (

        <div
          key={person.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "8px",
            width: "200px",
            boxShadow: "0 0 8px rgba(0,0,0,0.1)"
          }}
        >
          <p>Nome: {person.nome}</p>
          <p>Idade: {person.idade}</p>
        </div>

      ))}



    </div>
  )
}

export default Searchbar


// {!inputSearch ? (
//         <>
//           {arrPerson.map((person) => (
//             <div
//               key={person.id}
//               style={{
//                 border: "1px solid #ccc",
//                 padding: "1rem",
//                 borderRadius: "8px",
//                 width: "200px",
//                 boxShadow: "0 0 8px rgba(0,0,0,0.1)"
//               }}
//             >
//               <p>Nome: {person.nome}</p>
//               <p>Idade: {person.idade}</p>
//             </div>
//           ))}
//         </>
//       ) : (
//         <>
//           {arrSearch.length > 0 ? (
//             arrSearch.map((person) => (
//               <div
//                 key={person.id}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "1rem",
//                   borderRadius: "8px",
//                   width: "200px",
//                   boxShadow: "0 0 8px rgba(0,0,0,0.1)"
//                 }}
//               >
//                 <p>Nome: {person.nome}</p>
//                 <p>Idade: {person.idade}</p>
//               </div>
//             ))
//           ) : (
//             <div>Not found</div>
//           )}
//         </>
//       )}
