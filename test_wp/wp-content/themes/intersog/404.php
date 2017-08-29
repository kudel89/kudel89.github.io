<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package intersog
 */

get_header(); ?>

<!-- main-content -->
<div class="main-content-cover">
<div class="main-content-container">
	<p class="main-content-text-top">
		<strong>К сожалению, такой страницы не существует.</strong>
	</p>
</div>
</div>
<!-- / main-content -->

<?php the_content(); ?>
<?php get_footer(); ?>