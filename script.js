const users = [
  { name: "John Steven Doe", email: "john@example.com", role: "UI UX Designer", status: "Active" },
  { name: "Barry Jhayson", email: "barry@example.com", role: "Backend Engineer", status: "Inactive" },
  { name: "Tiwa Cavage", email: "tiwa@example.com", role: "UI UX Designer", status: "Active" },
  { name: "James IDK", email: "james@example.com", role: "UI UX Designer", status: "Active" },
  { name: "Vanessa Chidi", email: "vanessa@example.com", role: "UI UX Designer", status: "Active" },
  { name: "Don Gorgon", email: "don@example.com", role: "UI UX Designer", status: "Active" },
  { name: "Sarah Wilson", email: "sarah@example.com", role: "UI UX Designer", status: "Active" },
];

const tableBody = document.getElementById("user-table-body");

users.forEach((user, index) => {
  const isEven = index % 2 === 0;
  const row = document.createElement("tr");
  row.className = `${isEven ? "bg-white" : "bg-[#f4f8ff]"} shadow-sm rounded`;

  row.innerHTML = `
    <td class="p-3">${user.name}</td>
    <td class="p-3">${user.email}</td>
    <td class="p-3">${user.role}</td>
    <td class="p-3">
      <span class="text-sm font-medium ${user.status === "Active" ? "text-green-600" : "text-red-600"}">${user.status}</span>
    </td>
    <td class="p-3">
      <div class="relative inline-block text-left">
        <button onclick="toggleDropdown(this)" class="bg-blue-600 text-white px-3 py-1 rounded">
          Actions <i class="fa-solid fa-circle-chevron-down"></i>
        </button>
        <div class="hidden absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div class="py-1">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit Profile</a>
          </div>
        </div>
      </div>
    </td>
  `;

  tableBody.appendChild(row);
});

function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  dropdown.classList.toggle("hidden");
}
