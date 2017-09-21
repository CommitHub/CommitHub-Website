<?php include 'config/config.php'; ?>
<?php include 'libraries/Database.php'; ?>
<?php include 'includes/header.php'; ?>
<?php
    //Create DB Object
    $db = new Database();

    //Create Query
    $query = "SELECT * FROM posts";

    //Run Query
    $posts = $db->select($query);
?>
<?php echo phpversion(); ?>
<?php if($posts) : ?>
    <div class="blog-post">
        <h2 class="blog-post-title">International PHP Conference</h2>
        <p class="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et convallis ante, in rhoncus lacus. Sed vehicula, tortor sed sodales rhoncus, libero lorem feugiat diam, posuere porta tellus risus non libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis metus felis, bibendum in tortor a, elementum tempor sapien. Aliquam rhoncus erat quis enim accumsan placerat. Pellentesque mi quam, accumsan et tellus eget, gravida iaculis ipsum. Nulla cursus nec nisi at luctus. Aenean eget commodo erat, sit amet elementum magna. Praesent at libero volutpat, porta purus eu, maximus erat. Maecenas tristique id lacus at sollicitudin. Mauris ut mollis est, et laoreet sem. Etiam vitae leo a orci pretium pretium.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et convallis ante, in rhoncus lacus. Sed vehicula, tortor sed sodales rhoncus, libero lorem feugiat diam, posuere porta tellus risus non libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis metus felis, bibendum in tortor a, elementum tempor sapien. Aliquam rhoncus erat quis enim accumsan placerat. Pellentesque mi quam, accumsan et tellus eget, gravida iaculis ipsum. Nulla cursus nec nisi at luctus. Aenean eget commodo erat, sit amet elementum magna. Praesent at libero volutpat, porta purus eu, maximus erat. Maecenas tristique id lacus at sollicitudin. Mauris ut mollis est, et laoreet sem. Etiam vitae leo a orci pretium pretium.</p>
        <a class="readmore" href="post.php?id=1">Read More</a>
    </div><!-- /.blog-post -->

    <div class="blog-post">
        <h2 class="blog-post-title">Hello World</h2>
        <p class="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et convallis ante, in rhoncus lacus. Sed vehicula, tortor sed sodales rhoncus, libero lorem feugiat diam, posuere porta tellus risus non libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis metus felis, bibendum in tortor a, elementum tempor sapien. Aliquam rhoncus erat quis enim accumsan placerat. Pellentesque mi quam, accumsan et tellus eget, gravida iaculis ipsum. Nulla cursus nec nisi at luctus. Aenean eget commodo erat, sit amet elementum magna. Praesent at libero volutpat, porta purus eu, maximus erat. Maecenas tristique id lacus at sollicitudin. Mauris ut mollis est, et laoreet sem. Etiam vitae leo a orci pretium pretium.</p>
        <a class="readmore" href="post.php?id=1">Read More</a>
    </div><!-- /.blog-post -->

<?php else: ?>
    <p>There are no posts yet</p>
<?php endif; ?>
<?php include 'includes/footer.php'; ?>
