import React, { useEffect, useState } from 'react';
import { fetchMaterials } from '../../services/api';

const MaterialList = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const getMaterials = async () => {
      const data = await fetchMaterials();
      setMaterials(data);
    };
    getMaterials();
  }, []);

  return (
    <div>
      {materials.map(material => (
        <div key={material.id}>
          <h3>{material.title}</h3>
          <p>{material.category}</p>
          <a href={material.fileURL} download>Download</a>
        </div>
      ))}
    </div>
  );
};

export default MaterialList;
