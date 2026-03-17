document.getElementById("joinForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    firstName: document.getElementById("forName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("staticEmail").value,
    phone: document.getElementById("phoneNumber").value,
    linkedin: document.getElementById("forCompany").value,
    areaOfInterest: document.getElementById("inquiryType").value,
    roleInterest: document.getElementById("roleType").value,
  };

  const res = await fetch("http://localhost:7000/api/v1/join-us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  alert(data.message);
});
