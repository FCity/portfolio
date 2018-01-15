<!DOCTYPE html>
<html lang="en">
<head>
  <title>Sigourney Excites Me</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.min.js"></script>
</head>
<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#theNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="#" class="navbar-brand">Exciter</a>
    </div>
    <div class="collapse navbar-collapse" id="theNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li class="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="jumbotron">
  <div class="container"></div>
</div>

<div id="theCarousel" class="carousel slide">
  <ol class="carousel-indicators">
    <li data-target="#theCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#theCarousel" data-slide-to="1"></li>
    <li data-target="#theCarousel" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner">
    <div class="item active">
      <img src="http://justfunfacts.com/wp-content/uploads/2017/07/sigourney-weaver-young.jpg" alt="sw1">
      <div class="carousel-caption">
        <h3>Young</h3>
        <p>Sigourney in her youth</p>
      </div>
    </div>
    <div class="item">
      <img src="https://i.pinimg.com/736x/9b/2a/c2/9b2ac2a9a9faedc7c1a7ac49e711d6a4--sigourney-weaver-white-photography.jpg" alt="sw2">
      <div class="carousel-caption">
        <h3>Strong</h3>
        <p>Sigourney has always been a strong woman</p>
      </div>
    </div>
    <div class="item">
      <img src="http://static.thefrisky.com/uploads/2010/11/04/no-to-plastic-surgery-sigourney-weaver.jpg" alt="sw3">
      <div class="carousel-caption">
        <h3>Mature</h3>
        <p>Sigourney is the most mature, elegant woman (and person) in the world...ever!</p>
      </div>
    </div>
  </div>
  
  <a class="left carousel-control" href="#theCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#theCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>

<footer>
  <p><a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href="#">CodePen</a> | <a href="#">Facebook</a></p>
</footer>

</body>
</html>