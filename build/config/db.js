"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const configSetup_1 = __importDefault(require("./configSetup"));
const models = __importStar(require("../models/Models"));
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mssql',
    host: configSetup_1.default.DBHOST,
    port: configSetup_1.default.DBPORT,
    username: configSetup_1.default.DBUSERNAME,
    password: configSetup_1.default.DBPASSWORD,
    database: configSetup_1.default.DBNAME,
    models: Object.values(models),
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: false,
        },
    },
});
// console.log('DB_CONNECTION_STRING:', config.DB_CONNECTION_STRING);
// const sequelize = new Sequelize(
//     config.DB_CONNECTION_STRING || 'test',
//     {
//         dialect: 'mssql',
//         models: Object.values(models),
//         dialectOptions: {
//             options: {
//                 encrypt: false,
//                 trustServerCertificate: true,
//                 instanceName: 'SQLEXPRESS'
//             }
//         }
//     }
// );
sequelize.authenticate().then(() => {
    console.log('Database connection successful!.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
exports.default = sequelize;
