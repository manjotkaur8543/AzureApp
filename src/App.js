import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 My First Azure Deployment!</h1>
        <p>Built by [Your Name] - Azure Learning Journey</p>
        <p>Deployed to Azure Static Web Apps</p>
        <div style={{marginTop: '20px'}}>
          <button onClick={() => alert('Hello from Azure!')}>
            Click me!
          </button>
        </div>
        <p style={{fontSize: '14px', marginTop: '20px'}}>
          Deployment Date: {new Date().toLocaleDateString()}
        </p>
      </header>
    </div>
  );
}

export default App;
