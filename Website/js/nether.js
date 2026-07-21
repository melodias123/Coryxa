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

    const x = Number(document.getElementById("x").value);
    const z = Number(document.getElementById("z").value);

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