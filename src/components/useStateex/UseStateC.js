import React ,{useState} from 'react';

const ValueClic =()=>{
    //premier valeur = valeur du state
    // seconde valeur = est la fonction qui modifie le state
      const [click , plusone] = useState(0);

      return(
          <div className="container">
              <p>Nombre de click est de {click}</p>
              <button onClick={()=>{plusone(click +1 )}}>
                  cliquez ici
              </button>
          </div>
      );
}
export default ValueClic;