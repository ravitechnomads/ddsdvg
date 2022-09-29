const { exec } = require("child_process");
const str = "metaboss update uri \
--keypair ~/.config/solana/223.json \
--account DxU7w5FnkHSjxha7z6f8ruRipf5vMHqMWN4M6sztkZvX \
--new-uri https://sovereign-nftt.s3.ap-south-1.amazonaws.com/3.json"

exec(str, (error, stdout, stderr) => {
    console.log("stdout: " + stdout);
    console.log("stderr: " + stderr);
    if (error !== null) {
        console.log("exec error: " + error);
    }
});