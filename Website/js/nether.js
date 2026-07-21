let direction = "overworld";

function swapDirection() {

    if (direction === "overworld") {

        direction = "nether";

        document.getElementById("fromLabel").textContent = "Nether";
        document.getElementById("toLabel").textContent = "Overworld";

        document.getElementById("x").placeholder = "Nether X";
        document.getElementById("z").placeholder = "Nether Z";

    } else {

        direction = "overworld";

        document.getElementById("fromLabel").textContent = "Overworld";
        document.getElementById("toLabel").textContent = "Nether";

        document.getElementById("x").placeholder = "Overworld X";
        document.getElementById("z").placeholder = "Overworld Z";

    }

}

function calculateNether() {

    const xInput = document.getElementById("x");
    const zInput = document.getElementById("z");

    const x = Number(xInput.value);
    const z = Number(zInput.value);

    if (xInput.value === "" || zInput.value === "") {

        document.getElementById("result").textContent =
            "Please enter both X and Z coordinates.";

        return;

    }

    let resultX;
    let resultZ;

    if (direction === "overworld") {

        resultX = x / 8;
        resultZ = z / 8;

        document.getElementById("result").textContent =
            `Nether Coordinates: X ${resultX}, Z ${resultZ}`;

    } else {

        resultX = x * 8;
        resultZ = z * 8;

        document.getElementById("result").textContent =
            `Overworld Coordinates: X ${resultX}, Z ${resultZ}`;

    }

}