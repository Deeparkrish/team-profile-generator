const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
const Manager = require('../lib/Manager');



test("create a manager object",() =>{
    const manager = new Manager('Ramesh','m1','ramsesh@222.com',1234);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toContain('@');
    expect(manager.officenum).toEqual(expect.any(Number));
})

