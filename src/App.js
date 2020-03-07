import { render, Component } from 'inferno';
import { BrowserRouter, Route, Link } from 'inferno-router';
import Logo from './logo';
import './App.css';
import { Favurites } from './routes/Favurites';
import { Updates } from './routes/Updates';
import { Home } from './routes/Home';

export const MangaReader = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favurites">Favurites</Link></li>
        <li><Link to="/updates">Updates</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/favurites" component={Favurites} />
      <Route path="/updates" component={Updates} />
    </div>
  </BrowserRouter>
);
