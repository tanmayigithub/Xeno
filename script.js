document
  .getElementById("leadForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      document.getElementById("responseMsg").innerText =
        "Lead saved successfully!";
    } catch (error) {
      console.error(error);
      document.getElementById("responseMsg").innerText = "Error saving lead.";
    }
  });
