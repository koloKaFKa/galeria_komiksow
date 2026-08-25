document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("codeForm");
    const input = document.getElementById("kod");
    const codeList = document.getElementById("codeList");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const code = input.value.trim();

        // Odsłonięcie odpowiedniego obrazu
        const img = document.querySelector(`img[data-code="${code}"]`);

        if (img) {
            img.classList.remove("locked");

            const li = document.createElement("li");
            li.textContent = code;
            codeList.appendChild(li);
        } else {
            alert("Niepoprawny kod.");
        }

        input.value = "";
    });

});
