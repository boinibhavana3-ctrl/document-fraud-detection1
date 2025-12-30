function predict() {
    const fileInput = document.getElementById("fileInput");
    const resultDiv = document.getElementById("result");

    if (fileInput.files.length === 0) {
        alert("Please upload a document image first!");
        return;
    }

    // In real scenario, you would send this file to backend (Python ML model)
    // For demo, we'll randomly show result
    const outcomes = ["Genuine Document ✅", "Fraudulent Document ❌"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);

    resultDiv.innerHTML = outcomes[randomIndex];
}
