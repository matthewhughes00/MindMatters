console.log("your index.js file is loaded cool cool cool.");

//jQuery Smooth Scroll 
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function addToCartClick(){
    DY.API("event", {
        name: "Add to Cart",
        properties: {
            dyType: "add-to-cart-v1",
            value: 118.26,
            currency: "any supported currency code",
            productId: "item-34454",
            quantity: 2,
            size: "XL",
            cart: [{
                productId: "sku-4324-bg",
                quantity: 2,
                itemPrice: 12.34,
            },
                   {
                       productId: "item-34454",
                       quantity: 2,
                       itemPrice: 59.13
                   }
                  ]
        }
    });
        }
