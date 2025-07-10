
async function askProgno() {
    const input = document.getElementById("input").value;
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: input })
    });

    const result = await response.json();
    document.getElementById("output").textContent = result.response || result.error || "No response";
}
