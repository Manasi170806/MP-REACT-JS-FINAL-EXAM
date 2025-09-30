import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Product from "./Components/Products/Products";
import SearchFilter from "./Components/SearchFilter/SearchFilter";


function App() {
  return (
    <Provider store={store}>
      <SearchFilter />
      <Product />
    </Provider>
  );
}

export default App;
