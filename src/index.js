import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Demo1Container from './components/Demo1/DemoComponent';
import Demo2Container from './components/Demo2/DemoComponent';

ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/demo1" component={Demo1Container} />
      <Route path="/demo2" component={Demo2Container} />
    </Router>
  </AppContainer>,
  document.getElementById('approot')
);

// if (module.hot) {
//   module.hot.accept('./components/DemoComponent', () => {
//     // If you use Webpack 2 in ES modules mode, you can
//     // use <App /> here rather than require() a <NextApp />.
//     const NextDemoComponent = require('./components/DemoComponent').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextDemoComponent />
//       </AppContainer>,
//       document.getElementById('approot')
//     );
//   });
// }

/* eslint-disable */
if (module.hot) {
  module.hot.accept(['./components/Demo1/DemoComponent', './components/Demo2/DemoComponent'], () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextDemo1Component = require('./components/Demo1/DemoComponent').default;
    const NextDemo2Component = require('./components/Demo2/DemoComponent').default;
    ReactDOM.render(
      <AppContainer>
        <Router history={browserHistory}>
          <Route path="/" component={NextDemo1Component} />
          <Route path="/demo2" component={NextDemo2Component}/>
        </Router>
      </AppContainer>,
      document.getElementById('approot')
    );
  });
}