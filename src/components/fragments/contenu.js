import React ,{Fragment} from 'react';

const FragmentReact =()=>{
  /*
   parfois lorsqu'on veux rendre des elements à la vue , 
   on est obligé de creer un parent , soit un div alors cela 
   a un inconvenient qui est de ralentir l'app car cela cree un
   noeud au dom.
   Pour pallier a ce pb , react à creer ce qu'on appele " Fragment"
   --> l'utiliter est de ne pas creer des div inutile qui cree des noeuds
   supplementaire qu dom
  */

      return(
          <Fragment>
                <h1>je suis dans le fragment de react coool</h1>
          </Fragment>
      );
}
export default FragmentReact;