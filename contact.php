<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="icon" href="img/small.png">
    <link rel="stylesheet" href="css/preloader.css">
    <link rel="stylesheet" href="css/contact.css">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
    <!-- Preloader -->
    <div id="overlay">
        <div class="spinner"></div>
    </div>
    <header>
    <!--Nav Bar -->
        <div id="header">
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">CommitHub</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#team">The Team</a></li>
                            <li class="active"><a href="#contact">Contact Us</a></li>
                            <li><a href="blog.php">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!-- Contact Form -->
        <div class="container">
             <form action="<?= $_SERVER['PHP_SELF']; ?>">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email.." required>

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="usa">USA</option>
                    <option value="afghanistan">Afghanistan</option>
                    <option value="albania">Albania</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" required></textarea>

                <input type="submit" value="Submit">

            </form>
        </div>
        <script type="text/javascript" src="js/preloader.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/jquery.easeScroll.js"></script>
        <script type="text/javascript" src="js/mouseScroll.js"></script>
</body>
</html>