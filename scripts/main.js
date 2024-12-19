const governorSelect = document.getElementById("governor");
const facilitySelect = document.getElementById("facility");
const mineralsList = document.getElementById("minerals-list");
const cartList = document.getElementById("cart-list");
const purchaseBtn = document.getElementById("purchase-btn");

const facilities = {
  earth: ["Earth Facility Alpha", "Earth Facility Beta"],
  mars: ["Mars Facility Gamma"],
  europa: ["Europa Facility Delta", "Europa Facility Epsilon"],
};

const minerals = {
  "Earth Facility Alpha": [
    { name: "Iron", quantity: 10 },
    { name: "Gold", quantity: 5 },
    { name: "Magnesium", quantity: 6 },
  ],
  "Earth Facility Beta": [{ name: "Silver", quantity: 8 }],
  "Mars Facility Gamma": [{ name: "Copper", quantity: 12 }],
  "Europa Facility Delta": [{ name: "Nickel", quantity: 3 }],
  "Europa Facility Epsilon": [{ name: "Platinum", quantity: 4 }],
};

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

facilitySelect.addEventListener("change", () => {
  const selectedFacility = facilitySelect.value;
  mineralsList.innerHTML = "";
  cartList.innerHTML = "";
  purchaseBtn.disabled = true;

  if (selectedFacility && minerals[selectedFacility]) {
    minerals[selectedFacility].forEach((mineral) => {
      if (mineral.quantity > 0) {
        const mineralItem = document.createElement("div");
        mineralItem.classList.add("mineral-item");
        mineralItem.innerHTML = `
                    <label>
                        <input type="radio" name="mineral" value="${mineral.name}">
                        ${mineral.name} (Quantity: ${mineral.quantity})
                    </label>
                `;
        mineralsList.appendChild(mineralItem);
      }
    });
  }
});

mineralsList.addEventListener("change", () => {
  const selectedMineral = document.querySelector(
    'input[name="mineral"]:checked'
  );
  purchaseBtn.disabled = !selectedMineral;
});

purchaseBtn.addEventListener("click", () => {
  const selectedMineral = document.querySelector(
    'input[name="mineral"]:checked'
  );
  if (selectedMineral) {
    const listItem = document.createElement("li");
    listItem.textContent = selectedMineral.value;
    cartList.appendChild(listItem);
  }
  purchaseBtn.disabled = true;
});
