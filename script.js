function searchSoftware() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        let vendor = card.querySelector('.vendor-tag').innerText.toLowerCase();
        if (title.includes(input) || vendor.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function filterCategory(category, btn) {
    let cards = document.querySelectorAll('.card');
    let buttons = document.querySelectorAll('.side-tab');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
    if (window.innerWidth < 900) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openGuide(name, steps) {
    const modal = document.getElementById('guideModal');
    const modalTitle = document.getElementById('modalTitle');
    const stepsDiv = document.getElementById('modalSteps');
    modalTitle.innerText = "Install: " + name;
    stepsDiv.innerHTML = steps.map((step, index) => `
        <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: flex-start;">
            <div style="background: #0ea5e9; color: white; min-width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800;">0${index + 1}</div>
            <div style="font-size: 14px; color: #64748b; line-height: 1.5;">${step}</div>
        </div>
    `).join('');
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('guideModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('guideModal');
    if (event.target == modal) closeModal();
}