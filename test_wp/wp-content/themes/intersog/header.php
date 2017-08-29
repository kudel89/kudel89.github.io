<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="ru"> <!--<![endif]-->

<head>

	<meta charset="utf-8">

	<title>Test</title>
	<meta name="description" content="">

	<!-- Load CSS -->

	<!-- normalize.css v7.0.0 -->
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/normalize.css">

	<!-- Bootstrap 3.3.7 -->
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/libs/bootstrap/css/bootstrap.min.css">

	<!-- FONT: 'Open Sans' -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700" rel="stylesheet">

	<!-- CSS Styles: Main -->
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/main.css">
	<!-- CSS Styles: Media -->
	<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/css/media.css">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory'); ?>/img/favicon/apple-touch-icon-114x114.png">

</head>

<body>

<header>
	<!-- underhead -->
	<section class="underhead-cover">
	<div class="underhead-container">
		<a href="tel:18008753230" target="_blank">1-800-875-3230</a>
		<img src="<?php bloginfo('template_directory'); ?>/img/header-tel-ico.png" alt="1-800-875-3230" class="header-tel-ico">
		<a href="mailto:sales@somecompany.com" target="_blank">sales@somecompany.com</a>
		<img src="<?php bloginfo('template_directory'); ?>/img/header-mail-ico.png" alt="sales@somecompany.com" class="header-mail-ico">
	</div>
	</section>
	<!-- / underhead -->

	<!-- clearfix -->
	<div class="clearfix"></div>

	<!-- NAV -->
	<nav class="navbar">
		<div class="navbar-header keep-open">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="<?php bloginfo('home'); ?>" class="logo"><img src="<?php bloginfo('template_directory'); ?>/img/logo.png" alt="Logo" class="img-responsive"></a>
		</div>
		<div id="navbar2" class="navbar-collapse collapse">
			<?php    /**
				* Displays a navigation menu
				* @param array $args Arguments
				*/
				$args = array(
					'theme_location' => '',
					'menu' => '',
					'container' => 'ul',
					'container_class' => 'nav navbar-nav navbar-right',
					'container_id' => '',
					'menu_class' => 'nav navbar-nav navbar-right',
					'menu_id' => '',
					'echo' => true,
					'fallback_cb' => 'wp_page_menu',
					'before' => '',
					'after' => '',
					'link_before' => '',
					'link_after' => '',
					'items_wrap' => '<ul id = "%1$s" class = "%2$s">%3$s</ul>',
					'depth' => 0,
					'walker' => ''
				);
				wp_nav_menu( $args ); ?>
		</div>
	</nav>
	<!-- / NAV -->

	<!-- clearfix -->
	<div class="clearfix"></div>

	<!-- breadcrumb -->
	<section class="breadcrumb-cover">
	<div class="header-container">
		<a href="<?php bloginfo('home'); ?>"><img src="<?php bloginfo('template_directory'); ?>/img/breadcrumb-ico.png" alt="1-800-875-3230" class="breadcrumb-ico"></a>
		<img src="<?php bloginfo('template_directory'); ?>/img/breadcrumb-arrow.png" alt="1-800-875-3230" class="breadcrumb-arrow">
		<a href="<?php $currenturl = get_permalink(); ?>" class="breadcrumb-url"><?php the_title(); ?></a>
	</div>
	</section>
	<!-- / breadcrumb -->

	<!-- clearfix -->
	<div class="clearfix"></div>

</header>

<!-- heading -->
<section class="heading-cover">
<div class="header-container"> 
	<!-- <h1>Plans & Pricing</h1> -->
	<h1><?php the_title(); ?></h1>
</div>
</section>
<!-- / heading -->

<!-- clearfix -->
<div class="clearfix"></div>