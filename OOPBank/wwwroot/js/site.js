function openModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    if (modal) {
        modal.classList.remove("show");
    }
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal-overlay")) {
        event.target.classList.remove("show");
    }
});



const connection = new signalR.HubConnectionBuilder()
    .withUrl("/notificationHub")
    .build();

let notificationCount = Number(localStorage.getItem("notificationCount")) || 0;

const badge = document.getElementById("notificationCount");
if (badge) {
    badge.innerText = notificationCount;
}
connection.on("ReceiveNotification", function (message) {
    notificationCount++;

    localStorage.setItem("notificationCount", notificationCount);

    const badge = document.getElementById("notificationCount");
    if (badge) {
        badge.innerText = notificationCount;
        badge.style.display = "inline-block";
    }

    showToast(message);
});
connection.start().catch(function (err) {
    console.error(err.toString());
});

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "signalr-toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("show");
    }, 100);

    setTimeout(function () {
        toast.classList.remove("show");

        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 4000);
}