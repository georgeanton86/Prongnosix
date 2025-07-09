document.querySelector("button").addEventListener("click", async () => {
  const input = document.querySelector("textarea").value;
  const responseDiv = document.getElementById("response");
  responseDiv.innerText = "Loading...";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    responseDiv.innerText = data.reply;
  } catch (err) {
    responseDiv.innerText = "Error: " + err.message;
  }
});
