import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import AddUser from "./pages/adduser.tsx";
import EditContact from "./pages/editContacts.tsx";
import { store } from "./redux/store.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/adduser",
		element: <AddUser />,
	},
	{
		path: "/edit/:id",
		element: <EditContact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
	// </React.StrictMode>
);
