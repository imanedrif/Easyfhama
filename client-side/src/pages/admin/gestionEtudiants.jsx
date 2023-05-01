import React, { useState, useEffect } from 'react';

const GestionEtudiants = () => {
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    fetch('/etudiants')
      .then(response => response.json())
      .then(data => setEtudiants(data))
      .catch(error => console.error(error));
  }, []);

  const handleUpdateEtudiant = (id) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ /* updated etudiant data */ })
    };

    fetch(`/etudiants/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        // handle successful update
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Liste des étudiants</h1>
      <ul>
        {etudiants.map(etudiant => (
          <li key={etudiant.id}>
            {etudiant.nom} {etudiant.prenom}
            <button onClick={() => handleUpdateEtudiant(etudiant.id)}>Modifier</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionEtudiants;
