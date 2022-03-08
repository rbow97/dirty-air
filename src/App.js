import './App.css'

const Logo = () => (
  <div className="logo">
    <p>LET'S</p>
    <p>TALK</p>
    <p>
      DIRTY<span>(air).</span>
    </p>
  </div>
)

function App() {
  return (
    <div className="App">
      {Logo()}
      <h1 className="header">Get involved</h1>
      <div className="links">
        <a
          href="https://hello.blf.org.uk/page/98488/petition/1?ea.tracking.id=clean_air_hub&_ga=2.40460576.34893244.1646767760-380404403.1646393265&_gac=1.183273044.1646394751.CjwKCAiAjoeRBhAJEiwAYY3nDK2b9OxXeHuvUiLawIva3761ZzTYOYb1uXW4tBKOodnGQKuu8ayfDxoC134QAvD_BwE∑"
          target="_blank"
          rel="noreferrer"
        >
          British Lung Foundation petition
        </a>
        <a href="#">British Lung Go Fund Me</a>
        <a
          href="https://aqicn.org/city/london/"
          target="_blank"
          rel="noreferrer"
        >
          Air Quality Index
        </a>
        <a href="#">Tweet The Mayor of London</a>
      </div>
    </div>
  )
}

export default App
