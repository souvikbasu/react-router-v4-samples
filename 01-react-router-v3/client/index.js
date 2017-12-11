import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, Link } from "react-router";

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>This is common header</header>
    <main>{props.children}</main>

    <div><Link to="/fruits" >Fruits</Link></div>
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

const Fruits = props => (
  <div><h1>Fruits Page</h1>
    <main>{props.children}</main>
  </div>)

const Apple = () => <h1>I am Apple</h1>;
const ColoredApple = ({params}) => <h1>I am {params.color} Apple</h1>;
const Orange = () => <h1>I am Orange</h1>;

const Animals = props => (
  <div><h1>Animals Page</h1>
    <main>{props.children}</main>
  </div>)

const AnimalHome = () => <h1>This is Index Route of Animal page</h1>;
const Cat = () => <h1>I am Cat</h1>;
const Dog = () => <h1>I am Dog</h1>;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <Route path="/fruits" component={Fruits}>
        <Route path="/fruits/apple" component={Apple} />
        <Route path="/fruits/apple/:color" component={ColoredApple} />
        <Route path="/fruits/orange" component={Orange} />
      </Route>
      <Route path="/animals" component={Animals} >
        <IndexRoute component={AnimalHome} />
        <Route path="/animals/cat" component={Cat} />
        <Route path="/animals/dog" component={Dog} />
      </Route>
    </Route>
  </Router>,

  document.getElementById("root")
);
