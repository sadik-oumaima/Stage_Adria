import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import Menu from './Menu.js'
import Comptes from './Comptes.js';
import Paiements from './Paiements.js';
import Recettes from './Recettes.js';
import Depenses from './Depenses.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "adria" component = {Home} title = "Welcome" initial = {true} />
         <Scene key = "about" component = {About} title = "Adria business & technology" />
         <Scene key = "menu" component = {Menu} title = "Adria business & technology" />
         <Scene key = "comptes" component = {Comptes} title = "Comptes" />
         <Scene key = "paiements" component = {Paiements} title = "Paiements" />
         <Scene key = "recettes" component = {Recettes}  />
         <Scene key = "depenses" component = {Depenses}  />


      </Scene>
   </Router>
)
export default Routes