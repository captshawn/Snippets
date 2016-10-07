<!-- Infinite Scroll with Masonry plugin -->
<script src='Add reference to InfiniteScroll-Masonry.js here'></script>

<script>
/**
 * Infinite Scroll + Masonry + ImagesLoaded
 */

(function() {

    // Main content container
    var $container = $('.blog-listing-wrapper:not(.simple-listing) > .post-listing');

	// Masonry + ImagesLoaded
	$container.imagesLoaded(function(){
		$container.masonry({
			// selector for entry content
			itemSelector: '.post-item'
		});
	});

	// Infinite Scroll
	$container.infinitescroll({

		// selector for the paged navigation (it will be hidden)
		navSelector  : ".blog-pagination",
		// selector for the NEXT link (to page 2)
		nextSelector : "a.next-posts-link:last",
		// selector for all items you'll retrieve
		itemSelector : ".blog-listing-wrapper > .post-listing > .post-item",

		// finished message
		loading: {
			finishedMsg: 'No more pages to load.'
			}
		},

		// Trigger Masonry as a callback
		function( newElements ) {
			// hide new items while they are loading
			var $newElems = $( newElements ).css({ opacity: 0 });
			// ensure that images load before adding to masonry layout
			$newElems.imagesLoaded(function(){
				// show elems now they're ready
				$newElems.animate({ opacity: 1 });
				$container.masonry( 'appended', $newElems, true );
			});

	});

})();
</script>