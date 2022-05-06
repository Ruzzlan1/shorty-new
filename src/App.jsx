import React from "react";
import "./App.css";
import {QueryClientProvider,QueryClient} from 'react-query'
import Form from "./components/Form";

const queryClient = new QueryClient()
function App() {
  return (
    <div className="container">
      <h1>Shorty</h1>
      <QueryClientProvider client={queryClient}>
      <Form />
      </QueryClientProvider>
    </div>
  )
}

export default App;
