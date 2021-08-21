// function-1

document.getElementById("apply-btn").addEventListener("click", function () {
    // get promo code
    const promoField = document.getElementById("promo-code");
    const promoCode = promoField.value;

    if (promoCode == "stevekaku") {
        const totalPrice = document.getElementById("total-price");
        const totalPriceText = totalPrice.innerText;
        const totalPriceTextUpdate = parseFloat(totalPriceText);
        totalPrice.innerText = totalPriceTextUpdate - (totalPriceTextUpdate * 20) / 100;
    }
});

// function-2
document.getElementById("memory-button-1").addEventListener("click", function () {
    const MemoryPrice = document.getElementById("memory-price");
    const MemoryPriceText = MemoryPrice.innerText;
    const MemoryPriceTextUpdate = parseFloat(MemoryPriceText);
    MemoryPrice.innerText = 0;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate - 0;
});

document.getElementById("memory-button-2").addEventListener("click", function () {
    const newMemoryPrice = document.getElementById("memory-price");
    const newMemoryPriceText = newMemoryPrice.innerText;
    const newMemoryPriceTextUpdate = parseFloat(newMemoryPriceText);
    newMemoryPrice.innerText = 180;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate + 180;
});

// function-3

document.getElementById("storage-button-1").addEventListener("click", function () {
    const storagePrice = document.getElementById("storage-price");
    const storagePriceText = storagePrice.innerText;
    const storagePriceTextUpdate = parseFloat(storagePriceText);
    storagePrice.innerText = 0;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate + 0;
});

document.getElementById("storage-button-2").addEventListener("click", function () {
    const newStoragePrice = document.getElementById("storage-price");
    const newStoragePriceText = newStoragePrice.innerText;
    const newStoragePriceTextUpdate = parseFloat(newStoragePriceText);
    newStoragePrice.innerText = 100;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate + 180;
});

document.getElementById("storage-button-3").addEventListener("click", function () {
    const brandNewStoragePrice = document.getElementById("storage-price");
    const brandNewStoragePriceText = brandNewStoragePrice.innerText;
    const brandNewStoragePriceTextUpdate = parseFloat(brandNewStoragePriceText);
    brandNewStoragePrice.innerText = 180;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate + 180;
});

// function -3

document.getElementById("delivery-button-1").addEventListener("click", function () {
    const deliveryPrice = document.getElementById("delivery-price");
    const deliveryPriceText = deliveryPrice.innerText;
    const deliveryPriceTextUpdate = parseFloat(deliveryPriceText);
    deliveryPrice.innerText = 0;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate + 0;
});

document.getElementById("delivery-button-2").addEventListener("click", function () {
    const newDeliveryPrice = document.getElementById("delivery-price");
    const newDeliveryPriceText = newDeliveryPrice.innerText;
    const newDeliveryPriceTextUpdate = parseFloat(newDeliveryPriceText);
    newDeliveryPrice.innerText = 20;

    const totalPrice = document.getElementById("total-price");
    const totalPriceText = totalPrice.innerText;
    const totalPriceTextUpdate = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceTextUpdate + 20;
});
