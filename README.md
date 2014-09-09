#TabModule


##Basic Usage

###HTML head
	<link rel="stylesheet" type="text/css" href="dist/tabModule.css" />
	<script type="text/javascript" src="jquery/jquery.min.js"></script		
	<script type="text/javascript" src="dist/tabModule.min.js"></script

	<script type="text/javascript">
		$(document).ready(function(){
			formModule.init();
		});
	</script>

###HTML body
	<div class="tab tab-vert">
		<ul class="tab-legend">
			<li class="active">Tab 1</li>
			<li>Tab 2</li>
		</ul>
		<ul class="tab-content">
			<li>
				<h4>First tab content</h4>
			</li>
			<li>
				<h4>Second tab content</h4>
			</li>
		</ul>
	</div>
