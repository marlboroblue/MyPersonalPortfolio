// Escape HTML special characters
        function escapeHtml(input) {
            return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        // Display user input securely using textContent
        function displaySecureInput() {
            var userInput = document.getElementById('userInput').value;
            var displayElement = document.getElementById('displayElement');
            displayElement.textContent = escapeHtml(userInput);
        }
// Disable right-click
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // Override console methods
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};