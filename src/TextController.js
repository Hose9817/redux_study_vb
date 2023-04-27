import { connect } from 'react-redux';
import { useState } from "react";

const TextController = (props) => {
    // console.log(props.version);

    const [text, setText] = useState("String");
    // console.log(text);
    // const text = 'ABCDEFGHIJKLMNOPQRSTUVWXY'

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => props.update(text)}>Save</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    version: state.appVersion,
})

const mapDispatchToProps = (dispatch) => ({
    update: (text) => dispatch({ type: "UPDATE", payload: text })
})

export default connect(mapStateToProps, mapDispatchToProps)(TextController);