const grid = document.querySelector(".problem-container");

function solve1() {
    let problems = grid.querySelectorAll(".problem-wrapper");
    problems.forEach(p => {
        let digits = p.querySelector(".digits");
        if (digits.classList.contains("isProblem")) {
            let binary = p.querySelector(".bits").textContent; 
            let decimal_string = binaryToDecimal(binary).toString();
            // console.log("decimal_string: " + decimal_string);
            digits.click();
            for (let i = 0; i < decimal_string.length; i++) {
                let digit = decimal_string[i];
                document.dispatchEvent(new KeyboardEvent('keydown', {'key': digit}));
            };
            document.querySelectorAll(".calculator .button")[2].click();
        } else {
            // console.log("To binary problem");
            let target_binary = parseInt(digits.textContent).toString(2);
            let padded_binary = target_binary.padStart(8, "0");
            // console.log(digits.textContent+" - target_binary: " + padded_binary);
            padded_binary.split("").forEach((bit, index) => {
                let bit_button = p.querySelectorAll(".bits .bit")[index];
                if (bit != bit_button.textContent) {
                    bit_button.click();
                }
            });
        }
    });
}

function main() {
    let solve_button = document.createElement('button');
    solve_button.classList.add('button');
    solve_button.textContent = "Solve";
    solve_button.addEventListener('click', solve1);
    document.querySelector('.window.menu-bar .buttons').appendChild(solve_button);
    // solve automatically every 0.5 seconds
    // setInterval(() => {
    //     solve_button.click();
    // }, 200);
} 

function binaryToDecimal(binary) {
    let decimal_number = 0;
    let bits = binary.split("");
    if (bits.length == 8) {
        bits.forEach((bit, index) => {
            if (bit == "1") {
                decimal_number += Math.pow(2, 7 - index);
            }
        });
    }
    return decimal_number;
}

main();

