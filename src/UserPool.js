
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    // UserPoolId: "us-east-1_MxDEmMV6H",
    // ClientId: "3nhqp6bo2ms0500t57f9b103lp"
    UserPoolId: "us-east-1_fXkM9vYwy",
    ClientId: "4a57ntdkte5kolmpa08li50inb"

}

export default new CognitoUserPool(poolData);
