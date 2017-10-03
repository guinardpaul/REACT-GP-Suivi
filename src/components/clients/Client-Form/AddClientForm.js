import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Col, Button, FormControl, ControlLabel, Checkbox } from 'react-bootstrap';

class AddClientForm extends Component {

  render() {
    return (
      <div className="panel-group">
        <form className="form-horizontal" onSubmit={this.addClient}>
          <div className="panel-info col-sm-4">
            <div className="panel-heading">Client</div>
            <div className="panel-body">
              <div className="form-group">
                <label for="civilite">Civilité :</label>
                <select className="form-control" name="civilite" id="civilite">
                  <option>Civilité...</option>
                  <option></option>
                </select>
              </div>
              <div className="form-group">
                <label for="nom">Nom :</label>
                <input type="text" className="form-control" name="nom" id="nom" autofocus required />
              </div>
              <div className="form-group">
                <label for="prenom">Prénom :</label>
                <input type="text" className="form-control" name="prenom" id="prenom" required />
              </div >
              <div className="form-group">
                <label for="email">Email :</label>
                <input type="text" className="form-control" name="email" id="email" required />
              </div >
              <div className="form-group">
                <label for="numTel">Tél :</label>
                <input type="text" className="form-control" name="numTel" id="numTel" />
              </div >
              <div className="form-group">
                <button type="submit" className="btn btn-success">Sauver</button>
                <button onClick="onCancel()" className="btn btn-default">Annuler</button>
              </div >
            </div >
          </div >
          <div className="panel-info col-sm-4">
            <div className="panel-heading">Adresse Facturation</div>
            <div className="panel-body">
              <div className="form-group">
                <label for="adresseFact">Adresse :</label>
                <input type="text" className="form-control" name="adresseFact" id="adresseFact" />
              </div>
              <div className="form-group">
                <label for="complAdresseFact">Complément adresse :</label>
                <input type="text" className="form-control" name="complAdresseFact" id="complAdresseFact" />
              </div>
              <div className="form-group">
                <label for="cpFact">Code postal :</label>
                <input type="text" className="form-control" name="cpFact" id="cpFact" />
              </div>
              <div className="form-group">
                <label for="villeFact">Ville :</label>
                <input type="text" className="form-control" name="villeFact" id="villeFact" />
              </div>
            </div>
          </div>
          <div className="panel-info col-sm-4">
            <div className="panel-heading">Adresse Chantier</div>
            <div className="panel-body">
              <div className="form-group">
                <label for="adresseChantier">Adresse :</label>
                <input type="text" className="form-control" name="adresseChantier" id="adresseChantier"
                />
              </div>
              <div className="form-group">
                <label for="complAdresseChantier">Complément adresse :</label>
                <input type="text" className="form-control" name="complAdresseChantier" id="complAdresseChantier"
                />
              </div>
              <div className="form-group">
                <label for="cpChantier">Code postal :</label>
                <input type="text" className="form-control" name="cpChantier" id="cpChantier"
                />
              </div>
              <div className="form-group">
                <label for="villeChantier">Ville :</label>
                <input type="text" className="form-control" name="villeChantier" id="villeChantier"
                />
              </div>
            </div>
          </div>
        </form >
      </div >
    );
  }
}

AddClientForm.PropTypes = {

}

export default AddClientForm;
