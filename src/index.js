import { Provider } from "react-redux";
import mystore from "./store/index";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");
function Main() {
    return (
        <BrowserRouter>
        <Provider store={mystore}>
            <App />
        </Provider>
        </BrowserRouter>

    )
}
// either <div> or <App />
// ReactDOM.render(<div>hello</div>, rootEl);
// instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
ReactDOM.render(<Main />, rootEl);