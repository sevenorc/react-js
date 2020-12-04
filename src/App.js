import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Lottery</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Test my luck</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="img3.jpg" alt="First slide" width="500px"/>
    </div>
  </div>
</div>


      <form>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="firstname">Firstname</label>
              <input type="text" name="firstname" class="form-control"/>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="lastname">Lastname</label>
              <input type="text" name="lastname" class="form-control"></input>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <select name="gender" class="form-control">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div  class="form-group">
          <label for="username">Username</label>
          <input type="text" name="username" class="form-control"></input>
        </div>
        <div  class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" class="form-control"></input>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" class="form-control"></input>
        </div>
        <div class="form-group">
        <input type="checkbox"></input>
        <label for="accept-terms">Accept terms and conditions</label>
        </div>
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
}

export default App;
