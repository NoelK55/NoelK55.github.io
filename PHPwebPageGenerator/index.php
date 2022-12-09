<?php
    $label = "Label";
    $aboutUs = "About us";
    if($_SERVER['REQUEST_METHOD'] === 'POST')
    {
        $label = $_POST['label'];
        $aboutUs = $_POST['aboutUs'];
    }
    
    $html = file_get_contents('https://noelk55.github.io/portfolio/');
    $pdfHtml = 'index.txt';

    file_put_contents($pdfHtml, $html);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $label ?></title>
    <link rel="stylesheet" href="generated.css">
</head>
<body>
    <!--Navigation-->
    <div class="navigation">
        <div id="container">
            <div id="navbar">
                <div id="navbar-title">
                    <h2>   
                        <?php
                            echo $label; 
                        ?>
                    </h2>
                </div>
                <div id="navbar-link">
                    <a href="index.html">Home</a>
                </div>
                <div id="navbar-link">
                    <a href="index.php">Generated</a>
                </div>
            </div>
        </div>
    </div>
    <!--About Us-->
    <div class="about-us">
        <div id="container">
            <div id="aboutUs">
                <div id="aboutUs-title">
                    <h1><?php echo $label;?></h1>
                </div>
                <div id="aboutUs-text">
                    <p><?php echo $aboutUs;?></p>
                </div>
            </div>
        </div>
    </div>    
</body>
</html>
