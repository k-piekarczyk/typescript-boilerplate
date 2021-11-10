/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    name: "Typescript Boilerplate",
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    modulePathIgnorePatterns: ["./dist", "./build"],
};