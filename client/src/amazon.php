<?php
$version = time();

require_once(dirname(__FILE__).'/../lang.php');

?><!DOCTYPE html>
<html>
	<head>
		<title><?php getTranslate($lang, 'page:title'); ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		<link rel="stylesheet" type="text/css" href="css/style.css?v<?php echo $version;?>">
		<link rel="icon" type="image/png" href="./images/favicon.ico" />
		<link rel='shortcut icon' type='image/x-icon' href='./images/favicon.ico' />

		<?php 
	    /* *************************** MGID SENSOR ********************************* */
	    if (!empty($mgid)) { ?>
	    <!-- Mgid Sensor --> 
	    <script type="text/javascript"> (function() { var d = document, w = window; w.MgSensorData = w.MgSensorData || []; w.MgSensorData.push({ cid:<?php echo $mgid; ?>, lng:"us", project: "a.mgid.com" }); var l = "a.mgid.com"; var n = d.getElementsByTagName("script")[0]; var s = d.createElement("script"); s.type = "text/javascript"; s.async = true; var dt = !Date.now?new Date().valueOf():Date.now(); s.src = "https://" + l + "/mgsensor.js?d=" + dt; n.parentNode.insertBefore(s, n); })(); 
	    </script> 
	    <!-- /Mgid Sensor -->
	    <?php } ?>

	    <?php if (!empty($taboola)) { ?>
	    <!-- Taboola Pixel Code -->
	    <script type='text/javascript'>
	      window._tfa = window._tfa || [];
	      window._tfa.push({notify: 'event', name: 'page_view', id: <?php echo $taboola; ?>});
	      !function (t, f, a, x) {
	             if (!document.getElementById(x)) {
	                t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
	             }
	      }(document.createElement('script'),
	      document.getElementsByTagName('script')[0],
	      '//cdn.taboola.com/libtrc/unip/<?php echo $taboola; ?>/tfa.js',
	      'tb_tfa_script');
	    </script>
	    <noscript>
	      <img src='https://trc.taboola.com/<?php echo $taboola; ?>/log/3/unip?en=page_view'
	          width='0' height='0' style='display:none' />
	    </noscript>
	    <!-- End of Taboola Pixel Code -->
	    <script>
	        _tfa.push({notify: 'event', name: 'lead', id: <?php echo $taboola; ?>});
	    </script>
	    <noscript>
	        <img src='https://trc.taboola.com/<?php echo $taboola; ?>/log/3/unip?en=lead'
	            width='0' height='0' style='display:none' />
	    </noscript>
	    <?php } ?>
	    <?php if (!empty($googletag)) {
	    	foreach ($googletag as $gtag) {
	    	?>
	    <!-- Global site tag (gtag.js) - Google Ads: <?php echo $gtag[1]; ?> -->
	    <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $gtag[0]; ?>"></script>
	    <script>
	      window.dataLayer = window.dataLayer || [];
	      function gtag(){dataLayer.push(arguments);}
	      gtag('js', new Date());

	      gtag('config', '<?php echo $gtag[0]; ?>');
	    </script>
	    <?php
			}
		} ?>
	</head>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-12 my-headings">
					<h1 class="text-white heading-1"><?php getTranslate($lang, 'amazon:container:text0'); ?></h1>
					<h1 class="text-white heading-1"><?php getTranslate($lang, 'amazon:container:text1'); ?></h1>
				</div>
				<div class="col-lg-4" id="header-form">
					<div class="d-none d-lg-block card" >
					  <div class="card-header text-center">
					    <?php getTranslate($lang, 'amazon:container:text2'); ?>
					  </div>
					  <div class="card-body">
					  	<form  id="mainForm-1" class="needs-validation" novalidate onsubmit="return sendInfo(event)">
						  <div class="form-group">
						    <label class="form-label" for="nombre"><?php getTranslate($lang, 'amazon:form:fistname'); ?></label>
						    <input type="text" class="form-control" id="nombre" placeholder="<?php getTranslate($lang, 'amazon:form:fistname_placeholder'); ?>" required>
						    <div class="invalid-feedback">
						        <?php getTranslate($lang, 'amazon:form:fistname_validation'); ?>
						    </div>
						  </div>
						  <div class="form-group">
						    <label class="form-label" for="apellido"><?php getTranslate($lang, 'amazon:form:lastname'); ?></label>
						    <input type="text" class="form-control" id="apellido" placeholder="<?php getTranslate($lang, 'amazon:form:lastname_placeholder'); ?>" required>
						    <div class="invalid-feedback">
						        <?php getTranslate($lang, 'amazon:form:lastname_validation'); ?>
						    </div>
						  </div>
						  <div class="form-group">
						    <label class="form-label" for="CorreoElectrónico"><?php getTranslate($lang, 'amazon:form:email'); ?></label>
						    <input type="email" class="form-control" id="CorreoElectrónico" placeholder="<?php getTranslate($lang, 'amazon:form:email_placeholder'); ?>" required>
						    <div class="invalid-feedback">
						        <?php getTranslate($lang, 'amazon:form:email_validation'); ?>
						    </div>
						  </div>
						  <div class="form-group">
						    <label class="form-label" for="NúmerodeTeléfono"><?php getTranslate($lang, 'amazon:form:phone'); ?></label>
						    <div class="input-group">
							    <div class="input-group-prepend col-3 px-0">
									<input type="text" class="form-control" id="countryCode-1" disabled>
								</div>
							    <input type="text" class="form-control telephone_number" maxlength="15" id="NúmerodeTeléfono" placeholder="<?php getTranslate($lang, 'amazon:form:phone_placeholder'); ?>" required>
							    <div class="invalid-feedback">
							        <?php getTranslate($lang, 'amazon:form:phone_validation'); ?>
							    </div>
							</div>
						  </div>
						  <?php if (!empty($terms)) { ?>
						  <div class="form-group">
							<input type="checkbox" class="aceptterms" required/>&nbsp;
						    <label class="form-label" data-toggle="modal" data-target="#termsModal"><?php getTranslate($lang, 'amazon:form:aceptterms'); ?></label>
						    <div class="invalid-feedback">
						        <?php getTranslate($lang, 'amazon:form:aceptterms_validation'); ?>
						    </div>
						  </div>
						  <?php } ?>
						  <button class="btn btn-lg btn-block form-button my-4" id="submit-button-1" type="submit"><?php getTranslate($lang, 'amazon:form:btnsubmit'); ?></button>
						  <?php if (!empty($terms)) { ?>
						  <div class="text-center"><?php getTranslate($lang, 'amazon:form:leyend'); ?></div>
						  <?php } ?>
						</form>
					  </div>
					  <div class="card-footer">
					  	<img src="images/pay-logos.png" class="img-fluid">
					  </div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<main>
		<div class="container mt-5">
			<div class="content">
				<div class="row">
					<div class="col-lg-8">
						<h1 class="heading-1 main-head-1">
		                     <?php getTranslate($lang, 'amazon:content:text0'); ?>
		                </h1>
		                <h6 class="heading-6 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:text1'); ?>
		                </h6>
		                <div class="mt-5 d-sm-block d-md-block d-lg-none">
		                	<div class="d-flex justify-content-center">
		                		<div class="card" >
								  <div class="card-header text-center">
								    <?php getTranslate($lang, 'amazon:content:text2'); ?>
								  </div>
								  <div class="card-body">
								  	<form id="mainForm-2" class="needs-validation" novalidate onsubmit="return sendInfo(event)">
									  <div class="form-group">
									    <label class="form-label" for="nombre"><?php getTranslate($lang, 'amazon:form:fistname'); ?></label>
									    <input type="text" class="form-control" id="nombre" placeholder="<?php getTranslate($lang, 'amazon:form:fistname_placeholder'); ?>" required>
									    <div class="invalid-feedback">
									        <?php getTranslate($lang, 'amazon:form:fistname_validation'); ?>
									    </div>
									  </div>
									  <div class="form-group">
									    <label class="form-label" for="apellido"><?php getTranslate($lang, 'amazon:form:lastname'); ?></label>
									    <input type="text" class="form-control" id="apellido" placeholder="<?php getTranslate($lang, 'amazon:form:lastname_placeholder'); ?>" required>
									    <div class="invalid-feedback">
									        <?php getTranslate($lang, 'amazon:form:lastname_validation'); ?>
									    </div>
									  </div>
									  <div class="form-group">
									    <label class="form-label" for="CorreoElectrónico"><?php getTranslate($lang, 'amazon:form:email'); ?></label>
									    <input type="email" class="form-control" id="CorreoElectrónico" placeholder="<?php getTranslate($lang, 'amazon:form:email_placeholder'); ?>" required>
									    <div class="invalid-feedback">
									        <?php getTranslate($lang, 'amazon:form:email_validation'); ?>
									    </div>
									  </div>
									  <div class="form-group">
									    <label class="form-label" for="NúmerodeTeléfono"><?php getTranslate($lang, 'amazon:form:phone'); ?></label>
									    <div class="input-group">
									    	<div class="input-group-prepend col-3 px-0">
												<input type="text" class="form-control" id="countryCode-2" disabled>
											</div>
										    <input type="text" class="form-control" id="NúmerodeTeléfono" placeholder="<?php getTranslate($lang, 'amazon:form:phone_placeholder'); ?>" required>
										    <div class="invalid-feedback">
										        <?php getTranslate($lang, 'amazon:form:phone_validation'); ?>
										    </div>
										</div>
									  </div>
									  <?php if (!empty($terms)) { ?>
									  <div class="form-group">
										<input type="checkbox" required/>&nbsp;
									    <label class="form-label" data-toggle="modal" data-target="#termsModal"><?php getTranslate($lang, 'amazon:form:aceptterms'); ?></label>
									    <div class="invalid-feedback">
									        <?php getTranslate($lang, 'amazon:form:aceptterms_validation'); ?>
									    </div>
									  </div>
									  <?php } ?>
									  <button class="btn btn-lg btn-block form-button my-4" id="submit-button-2" type="submit"><?php getTranslate($lang, 'amazon:form:btnsubmit'); ?></button>
									  <?php if (!empty($terms)) { ?>
									  <div class="text-center"><?php getTranslate($lang, 'amazon:form:leyend'); ?></div>
									  <?php } ?>
									</form>
								  </div>
								  <div class="card-footer">
								  	<img src="images/pay-logos.png" class="img-fluid">
								  </div>
								</div>
		                	</div>
		                </div>
		                
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading0'); ?>
		                </p>
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading1'); ?>
		                </p>
		                <h6 class="heading-6 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading2'); ?>
		                </h6>
		                <img src="images/CompChart.jpg" class="img-fluid mt-5">
		                <h6 class="heading-6 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading3'); ?>
		                </h6>
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading4'); ?>
		                </p>
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading5'); ?>
		                </p>
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading6'); ?>
		                </p>
		                <h1 class="heading-1 main-head-1 mt-5">
		                     <?php getTranslate($lang, 'amazon:content:heading7'); ?>
		                </h1>
		                <img src="images/investingmentor.jpg" class="img-fluid mt-5">
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading8'); ?>
		                </p>
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading9'); ?>
		                </p>
		                <p class="heading-5 mt-5">
		                	<?php getTranslate($lang, 'amazon:content:heading10'); ?>
		                </p>
						<ul class="list mt-5">
							 <?php getTranslate($lang, 'amazon:content:heading11'); ?>
						</ul>
						<div class="mt-5 d-flex justify-content-center">
							<button onclick="goToForm()" class="btn btn-block btn-lg text-white font-weight-bold btn-1"> <?php getTranslate($lang, 'amazon:content:heading12'); ?></button>
						</div>
						<div class="mt-5 d-flex justify-content-center">
							<img src="images/pay-logos.png" class="img-fluid">
						</div>
					</div>
					<div class="col-lg-4 d-none d-lg-block">
						<img src="images/side-banner.jpg" class="img-fluid side-banner">
					</div>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="container mt-5 py-5 disclaimer">
			<p><small><?php getTranslate($lang, 'amazon:footer:text0'); ?></small></p>
			<p>
				<small><?php getTranslate($lang, 'amazon:footer:text1'); ?></small>
			</p>			
			<nav class="navbar navbar-expand-lg d-flex justify-content-center mt-3">
			    <div class="navbar-nav">
			      <a class="nav-item nav-link" href="#" data-toggle="modal" data-target="#terms"><?php getTranslate($lang, 'amazon:footer:text2'); ?></a>
			      <a class="nav-item nav-link" href="#" data-toggle="modal" data-target="#about"><?php getTranslate($lang, 'amazon:footer:text3'); ?></a>
			    </div>
			</nav>
			<p class="text-center mt-3"><small>© <?php echo $site_url; ?></small></p>
		</div>
	</footer>
	<!-- TERMS &amp; CONDITIONS -->
	<div class="modal" id="terms" tabindex="-1" role="dialog">
	  <div class="modal-dialog modal-lg" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title"><?php getTranslate($lang, 'amazon:modal1:title'); ?></h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
			<?php getTranslate($lang, 'amazon:modal1:content'); ?>
	      </div>
	    </div>
	  </div>
	</div>
	<!-- ABOUT US -->
	<div class="modal" id="about" tabindex="-1" role="dialog">
	  <div class="modal-dialog modal-lg" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title"><?php getTranslate($lang, 'amazon:modal2:title'); ?></h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        <?php getTranslate($lang, 'amazon:modal2:content'); ?>
	      </div>
	    </div>
	  </div>
	</div>
	<!-- ABOUT US -->
	<div class="modal" id="termsModal" tabindex="-1" role="dialog">
	  <div class="modal-dialog modal-lg" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title"><?php getTranslate($lang, 'amazon:modal3:title'); ?></h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        <?php getTranslate($lang, 'amazon:modal3:content'); ?>
	      </div>
	    </div>
	  </div>
	</div>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script>
      window.aff = <?php echo $aff?>;
      window.subAffiliate = '<?php echo $affName ?>';
      window.keyConn = '<?php echo $keyConn; ?>';
      window.pa = <?php echo $progressiveAdd; ?>;
      window.btnMsg = '<?php getTranslate($lang, 'amazon:form:btnsubmit'); ?>';
      window.successMessage = '<?php getTranslate($lang, 'amazon:success_message'); ?>';
      window.terms = '<?php echo !empty($terms) ? 'true' : 'false'; ?>';
      <?php if (!empty($mgid)) { echo "window.mgid = '$mgid';"; } ?>
    </script>
    <script>
      function sendPixels() {
        <?php if (!empty($mgid)) { echo "_mgq.push(['MgSensorInvoke', 'sentLead']);"; } ?>
        <?php if (!empty($taboola)) { echo "window._tfa.push({ notify: \"event\", name: \"lead\", id: '$taboola' });"; } ?>
        <?php if (!empty($googletag)) { 
        	foreach ($googletag as $gtag) {
        		echo "
          gtag(\"event\", \"conversion\", {
            send_to: ['" . implode("', '", $gtag) . "'].join(\"/\"),
          });
        "; }
        } ?>
      }
      window.sendPixels = sendPixels;
    </script>
	<script type="text/javascript" src="./js/script-amazon.js?v=<?php echo $version;?>"></script>
</body>
</html>


