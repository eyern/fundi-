// Initialize IntaSend with your publishable API key
new window.IntaSend({
    publicAPIKey: "ISPubKey_live_d5f93427-83d0-4029-bb6b-a97d97bcf9c0", // Replace with your sandbox or live key
    live: true // Change to true when going live
})
.on("COMPLETE", (results) => {
    console.log("Payment successful:", results);
    // Redirect on successful payment
    window.location.href = "https://fundiservices.co.ke/";
})
.on("FAILED", (results) => {
    console.log("Payment failed:", results);
    // Handle failure
    alert("Payment failed, please try again.");
})
.on("IN-PROGRESS", (results) => {
    console.log("Payment in progress:", results);
});