window.onload = function() {

    if (document.title.includes("Home")) {
        addLoadMessage();
    }

    quoteEffect();
};

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill out all required fields.");
        return false;
    } else {
        return true;
    }
}

function toggleDescription(button) {
    var text = button.parentNode.querySelector("p");

    if (text.style.display == "none") {
        text.style.display = "block";
        button.innerHTML = "Hide Description";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show Description";
    }
}

function quoteEffect() {
    var quote = document.querySelector("blockquote");

    if (quote) {
        quote.addEventListener("mouseover", function() {
            quote.style.backgroundColor = "#dbe8f1";
            quote.style.fontStyle = "normal";
            quote.style.fontSize = "1.15rem";
        });

        quote.addEventListener("mouseout", function() {
            quote.style.backgroundColor = "#f8f4ef";
            quote.style.fontStyle = "italic";
            quote.style.fontSize = "1rem";
        });
    }
}

function addLoadMessage() {
    var footer = document.querySelector("footer");

    if (footer) {
        var p = document.createElement("p");
        var text = document.createTextNode("Page loaded on: " + Date());
        p.appendChild(text);
        footer.appendChild(p);
    }
}