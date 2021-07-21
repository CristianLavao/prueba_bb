"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeeController_1 = __importDefault(require("../controllers/EmployeeController"));
class EmployeeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', EmployeeController_1.default.list);
        this.router.get('/:id', EmployeeController_1.default.getOne);
        this.router.post('/', EmployeeController_1.default.create);
        this.router.put('/:id', EmployeeController_1.default.update);
        this.router.delete('/:id', EmployeeController_1.default.delete);
    }
}
const employeeRoutes = new EmployeeRoutes();
exports.default = employeeRoutes.router;
