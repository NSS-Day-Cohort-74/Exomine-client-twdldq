governorSelect.addEventListener("change", () => {
    const selectedGovernor = governorSelect.value;
    facilitySelect.innerHTML = '<option value="">Choose a Facility...</option>';
    mineralsList.innerHTML = "";
    cartList.innerHTML = "";
    purchaseBtn.disabled = true;
  
    if (selectedGovernor) {
      facilities[selectedGovernor].forEach((facility) => {
        const option = document.createElement("option");
        option.value = facility;
        option.textContent = facility;
        facilitySelect.appendChild(option);
      });
      facilitySelect.disabled = false;
    } else {
      facilitySelect.disabled = true;
    }
  });