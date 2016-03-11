 <nav>
   
	<div class="primary">
		<?php wp_nav_menu( array(
		  'container' => false,
		  'theme_location' => 'primary'

		)); ?>
	</div>
    
	<div class="hamburger">
		<p>&#9776;</p>
	</div>


	<div class="social">
		<?php wp_nav_menu( array(
		  'container' => false,
		  'theme_location' => 'social'

		)); ?>
	</div>
    

</nav>