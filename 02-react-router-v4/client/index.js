import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const PrimaryLayout = props => (
  <div className="primary-layout">

  <Route path="/" exact render={() => (
    <header>This is common header</header>
  )} />
  <Route path="/fruits" render={() => (
    <header>This is Fruits header</header>
  )} />
  <Route path="/animals" render={() => (
    <header>This is Animals header</header>
  )} />
    

    <Route path="/fruits" component={Fruits} />
    <Route path="/animals" component={Animals} />


    <div><Link to="/fruits/apple" >Apple</Link></div>
    <div><Link to="/fruits/apple/red" >Red Apple</Link></div>
    <div><Link to="/fruits/apple/green" >Green Apple</Link></div>
    <div><Link to="/fruits/orange" >Orange</Link></div>
    <div> --- </div>
    <div><Link to="/animals" >Animals</Link></div>
    <div><Link to="/animals/cat" >Cat</Link></div>
    <div><Link to="/animals/dog" >Dog</Link></div>
    </div>
);



const Apple = () => <h1>I am Apple</h1>;
const ColoredApple = ({match}) => <h1>I am {match.params.color} Apple</h1>;
const Orange = () => <h1>I am Orange</h1>;

const Fruits = ({match}) => (
  <div><h1>Fruits Page</h1>
    <Switch>
      <Route path="/fruits/apple" exact component={Apple} />
      <Route path="/fruits/apple/:color" component={ColoredApple} />
      <Route path="/fruits/orange" component={Orange} />
    </Switch>
  </div>);



const Cat = () => <h1>I am Cat</h1>;
const Dog = () => <h1>I am Dog</h1>;


const Animals = ({match}) => (
  <div><h1>Animals Page</h1>
    <Switch>
      <Route path={`${match.path}/cat`} component={Cat} />
      <Route path={`${match.path}/dog`} component={Dog} />
    </Switch>
  </div>);



ReactDOM.render(
  <Router>
    <PrimaryLayout />
  </Router>,

  document.getElementById("root")
);
