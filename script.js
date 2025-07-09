
async function askProgno() {
    const input = document.getElementById("user-input").value;
    const responseBox = document.getElementById("response");
    responseBox.textContent = "Thinking...";

    try {
        const res = await fetch("/api/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input })
        });

        const data = await res.json();
        responseBox.textContent = data.result || "No result.";
    } catch (err) {
        responseBox.textContent = "Error: " + err.message;
    }
}
