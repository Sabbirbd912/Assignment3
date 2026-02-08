function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    } else if (otp.length >= 8 && otp.startsWith("ph-")) {
        return true;
    } else { return false; }
}

// validOtp("Ph-1234q");

let check = validOtp("Ph-1grgrc4q");
console.log(check);