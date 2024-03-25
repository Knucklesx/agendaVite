import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import AddUser from "./pages/adduser.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/adduser",
		element: <AddUser />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
		{/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/adduser"
          element={<AddUser lastContactId={lastContactId} />}
        />
      </Routes>
    </Router> */}
	</React.StrictMode>
);
