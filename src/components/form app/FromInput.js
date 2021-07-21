import React, { Component } from 'react'

export default class FromInput extends Component {
    constructor() {
        super();
        this.state = {
            nom: '',
            age: '',
            ville: '',
            items: []//pour mettre les data entrées
        }
    }
    /*
    comme dans value on a mi notre state , a chaque fois que cela doit change
    chaque valeur sera mise à jour donc si c'est age alors , on aura even.target.age 
    qui sera mi à jour */
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log(event.target.name)
    }


    /*
      on veut que lorsqu'on soumet notre fromulaire , on remet notre state à 0 puis on recupere 
      les données envoyées
    */

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nom: '',
            age: '',
            ville: '',
            items: [...this.state.items, { nom: this.state.nom, age: this.state.age, ville: this.state.ville }]  //utilisation du spred operator cela permet d'ecrire dans un 
            //tableau tout ce  qu'on a ecrit dans nos inputs
        })
    }
    //permet de creer nos card qu'on a envie d'afficher
    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mt-5" key={index}>
                    <div className="card-body">
                        <h2>{item.nom}</h2>
                        <hr></hr>
                        <p>
                            Tu as {item.age} ans .
                        </p>
                        <p> Tu vis à {item.ville} .</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>      <h2>Creer vos Personnes ici</h2>
                <div className="card my-3">
                    <div className="card-header"> Ajouter une personne</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="nom"
                                    onChange={this.onChange}
                                    value={this.state.nom}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="age"
                                    onChange={this.onChange}
                                    value={this.state.age} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Ville</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="ville"
                                    onChange={this.onChange}
                                    value={this.state.ville} />
                            </div>

                            <button className="btn btn-primary btn-block"> creer votre fiche</button>
                        </form>
                    </div>
                </div>
                {this.renderCard()}
            </div>
        )
    }
}
