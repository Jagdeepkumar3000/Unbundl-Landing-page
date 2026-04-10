
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".accordion");

        buttons.forEach(btn => {
            btn.removeAttribute("onclick");

            btn.addEventListener("click", function () {
                const panel = this.nextElementSibling;
                const isOpen = panel.classList.contains("force-open");

                const panels = document.querySelectorAll(".panel");
                const allBtns = document.querySelectorAll(".accordion");

                panels.forEach(p => p.classList.remove("force-open"));
                allBtns.forEach(b => b.classList.remove("active"));

                if (!isOpen) {
                    panel.classList.add("force-open");
                    this.classList.add("active");
                }
            });
        });
    });
