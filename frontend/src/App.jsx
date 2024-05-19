import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  Award,
  Contact,
  Gais,
  Meet,
  Ticket,
  Conference,
  NotFound
} from "./components/index";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Gais />} /> 
      <Route path="/home" element={<Gais />} />
      <Route path="/gais" element={<Gais />} />
      <Route path="/award" element={<Award />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/meet" element={<Meet />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/conference" element={<Conference />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
