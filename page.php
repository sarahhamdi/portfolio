<?php get_header();  ?>

<div class="main">
  <div class="container">

    <div class="content">

      <!-- start personal statement loop -->
      
      <?php $personalStatement = new WP_Query(array(
        'posts_per_page'=> 1,
        'post_type'=> 'personal_statement'
      )); ?>

      <?php if ($personalStatement-> have_posts()): ?>
        <?php while ($personalStatement-> have_posts()): ?>
          
        <?php endwhile; ?>
      <?php endif; ?>



    <!-- start portfolio content loop -->

      <?php $Portfolio = new WP_Query(array(
        'posts_per_page'=> -1,
        'post_type'=> 'portfolio'
      )); ?>

      <?php if ($Portfolio-> have_posts()): ?>
        <?php while ($Portfolio-> have_posts()): ?>
          <?php $Portfolio-> the_post(); ?>
            <!-- project name -->
            <h3><?php echo get_field('project_name'); ?></h3>
            <!-- project description -->
            <p><?php echo get_field('project_description'); ?></p>
            <!-- images -->
            <?php $image = get_field('image_bw'); ?>
            <img src="<?php echo $image['sizes']['medium'] ?>" alt="">
            <?php $image = get_field('image_colour'); ?>
            <img src="<?php echo $image['sizes']['medium']; ?>" alt="">
            <!--  project links-->
            <?php while(has_sub_field('project_links')): ?>
              <?php $links = get_field('project_links'); ?>
                <p>
                  <a href="<?php echo $links['0']['project_link']; ?>"><?php echo $links['0']['project_link_title']; ?></a>
                </p>
          <?php endwhile; ?> <!-- end project link loop -->     
        <?php endwhile; ?> <!-- end portfolio content printing loop -->
      <?php endif; ?> <!-- end portfolio loop -->


      <!-- start blog posts loop  -->

      <?php $Blog = new WP_Query(array(
        'posts_per_page'=> -1,
        'post_type'=> 'blog_posts'
      )); ?>

      <?php if ($Blog-> have_posts()): ?>
        <?php while ($Blog-> have_posts()): ?>
          <?php $Blog-> the_post(); ?>
            <?php $blogInfo = get_field('blog_info'); ?>
              <ul>
                <!-- loops through all the items in the blog_info array and returns titles, links & publications -->
                <?php 
                  for ($x = 0; $x < count($blogInfo); $x++) {
                     echo "<li>" . "<a href='" . $blogInfo[$x]['blog_link'] . "'>" . $blogInfo[$x]['blog_title'] . "</a></li>";
                     echo "<p>" . $blogInfo[$x]['blog_publication'];
                  }
                ?>
              </ul>
        <?php endwhile; ?> <!-- end while loop for blog posts -->
      <?php endif; ?> <!-- end blog loop -->
      

    </div> <!-- /,content -->

  </div> <!-- /.container -->
</div> <!-- /.main -->

<?php get_footer(); ?>