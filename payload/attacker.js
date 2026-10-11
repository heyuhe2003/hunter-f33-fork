console.log("ATTACKER_CODE_EXECUTED sha=" + require("child_process").execSync("git rev-parse HEAD").toString().trim());
