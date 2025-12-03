import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

interface ApiResponse {
  message?: string;
  status?: string;
}

function App() {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Llamada al endpoint del backend
    fetch("/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al llamar al backend");
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* Mostrar respuesta del backend */}
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "8px",
          }}
        >
          <h3>Respuesta del Backend:</h3>
          {loading && <p>Cargando...</p>}
          {error && <p style={{ color: "#ff6b6b" }}>Error: {error}</p>}
          {apiData && (
            <div>
              <p style={{ color: "#61dafb" }}>{apiData.message}</p>
              {apiData.status && (
                <p style={{ color: "#51cf66" }}>Status: {apiData.status}</p>
              )}
            </div>
          )}
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
