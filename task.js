function showCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";  
    cardContainer.style.gap = "10px";  
    for (let i = 0; i < 6; i++) {  
        setTimeout(function () {
            cardContainer.innerHTML += `<div style="display: flex; flex-direction: column; align-items: center; padding: 10px; border: 1px solid #ccc; width: 350px;">
                    <img src="https://www.hdwallpapers.in/download/kajal_aggarwal_hd_5k-wide.jpg" style="width: 300PX; height: 200PX;">
                    <h1 style="font-size: 16px; margin: 10px 0 5px;">DARLING${i + 1}</h1>
                    <p style="font-size: 14px; margin: 0;">KAJAL</p>
                </div>
            `;
        }, 2000 * i);
    }
}