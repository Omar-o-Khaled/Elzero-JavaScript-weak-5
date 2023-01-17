let st = "Elzero Web School";

// 1
if (`${st.charAt(st.indexOf("W")).toLowerCase()}` === "w") {
    console.log("Good");
}

// 2
if (typeof st.length !== "string") {
    console.log("Good");
}

// 3
if (typeof st.length === "number") {
    console.log("Good");
}

// 4
if (st.substr(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}