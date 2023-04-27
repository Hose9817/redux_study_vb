import { connect } from 'react-redux';
import Controller from './Conroller';
import TextController from './TextController';

function App(props) {
  return (
    <div className="App">
      <p><b>Count:</b> {props.myCount}</p>
      <p>App Version : {props.appVersion}</p>
      <hr />
      {/* <button onClick={props.plus}>Plus</button>
      <button onClick={props.minus}>Minus</button> */}
      <Controller />
      <hr />
      <TextController/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myCount: state.count,
  appVersion: state.appVersion,
})

// const mapDispatchToProps = (dispatch) => ({
//   plus: () => dispatch({type: "PLUS"}),
//   minus: () => dispatch({type: "MINUS"}),
// })

export default connect(mapStateToProps)(App);
