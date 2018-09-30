jQuery(window).load(function() {
    // will first fade out the loading animation
// jQuery("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
jQuery("#preloader").delay(5000).fadeOut("slow");
})


$(document).ready(function() {
    // jQuery(".loader").fadeOut(500);
$(".typewriter-effect").typer({
strings: [
"Welcome to Infinites Cube",
"Your Imagination, Our Creation"
] });
});
