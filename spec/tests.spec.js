import { expect } from "chai";
import {validateEmail} from "../functions.js";
function TestEmail(Test_email,expected){
    describe("Test Suite", function () {
        it("Test check for email", function () {
            console.log(`${Test_email} should return ${expected} for being a valid email`)
            expect(validateEmail(Test_email)).to.equal(expected)
        });
    });
}

TestEmail("name",false)
TestEmail("name.com",false)
TestEmail("name@example",false)
TestEmail("name@example.com",true)
TestEmail("name@example.co.uk",true)